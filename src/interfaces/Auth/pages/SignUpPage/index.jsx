import React, { useRef, useState } from 'react'
import './styles.css'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, setFullNameRegister } from '../../reducer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { sendNotify } from '../../../utils/sendNotify'

const SignUpPage = () => {
    const page = useSelector((state) => state.authReducer.page)
    const fullName = useSelector((state) => state.authReducer.fullNameRegister)
    const dispatch = useDispatch()

    const isOpen = page === 'sign-up'
    const [numberPhone, setNumberPhone] = useState('')
    const [password, setPassword] = useState('')

    const nodeRef = useRef(null)

    const formatPhoneNumber = (inputPhoneNumber) => {
        const cleanedPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, '')

        let formattedPhoneNumber = ''
        if (cleanedPhoneNumber.length >= 1) {
            formattedPhoneNumber = '+7-' + cleanedPhoneNumber.slice(1, 4)
        }
        if (cleanedPhoneNumber.length >= 4) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(4, 7)
        }
        if (cleanedPhoneNumber.length >= 7) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(7, 9)
        }
        if (cleanedPhoneNumber.length >= 9) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(9, 11)
        }
        return formattedPhoneNumber
    }

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value
        const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber)
        setNumberPhone(formattedPhoneNumber)
    }

    const handleSignUp = async () => {
        if (fullName === '' || numberPhone === '' || password === '') {
            sendNotify('error', '5', 5)
            sendNotify('error', '4', 1)
            sendNotify('error', '3', 3)
            sendNotify('error', '2', 2)
            sendNotify('error', '1', 1)
            return
        }
        await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, numberPhone, password })
        })
            .then((response) => {
                dispatch(setPage('card-selector'))
            })
            .catch((error) => {
                console.error('Ошибка:', error)
            })
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={250}
            classNames='sign-up-wrapper'
            mountOnEnter
            unmountOnExit
        >
            <div className='sign-up-wrapper' ref={nodeRef}>
                <Input
                    value={fullName}
                    setValue={(event) => dispatch(setFullNameRegister(event.target.value))}
                    placeholder='Фамилия Имя'
                    style={{ marginBottom: '10px' }}
                />
                <Input
                    value={numberPhone}
                    setValue={handlePhoneNumberChange}
                    placeholder='Введите номер телефона'
                    style={{ marginBottom: '10px' }}
                />
                <Input
                    value={password}
                    setValue={(event) => setPassword(event.target.value)}
                    placeholder='Придумайте пароль'
                    style={{ marginBottom: '20px' }}
                    type='password'
                />
                <Button text='Далее' onClick={handleSignUp} style={{ marginBottom: '5px' }} />
                <Button
                    text='Уже есть аккаунт?'
                    onClick={() => dispatch(setPage('sign-in'))}
                    type={1}
                />
            </div>
        </CSSTransition>
    )
}

export default SignUpPage
