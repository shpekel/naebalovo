import React, { useRef, useState } from 'react'
import './styles.css'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../reducer'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignInPage = () => {
    const page = useSelector((state) => state.authReducer.page)
    const dispatch = useDispatch()
    const isOpen = page === 'sign-in'

    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const nodeRef = useRef(null)

    const handleSignIn = async () => {
        if (fullName === '' || password === '') return

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, password })
            })

            if (!response.ok) {
                console.error('Ошибка:', response.statusText)
                return
            }

            const data = await response.json()
            console.log('Ответ сервера:', data.message)
        } catch (error) {
            console.error('Ошибка:', error)
        }
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={250}
            classNames="sign-in-wrapper"
            mountOnEnter
            unmountOnExit
        >
            <div className="sign-in-wrapper" ref={nodeRef}>
                <Input
                    value={fullName}
                    setValue={(event) => setFullName(event.target.value)}
                    placeholder="Фамилия Имя"
                    style={{ marginBottom: '10px' }}
                />
                <Input
                    value={password}
                    setValue={(event) => setPassword(event.target.value)}
                    placeholder="Введите пароль"
                    style={{ marginBottom: '20px' }}
                    type="password"
                />
                <Button text="Войти" onClick={handleSignIn} style={{ marginBottom: '5px' }} />
                <Button
                    text="Создать аккаунт"
                    onClick={() => dispatch(setPage('sign-up'))}
                    type={1}
                />
            </div>
        </CSSTransition>
    )
}

export default SignInPage
