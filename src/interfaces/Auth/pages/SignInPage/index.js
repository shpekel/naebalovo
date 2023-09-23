import React, {useState} from 'react'
import './styles.css'
import CSSTransition from 'react-transition-group'

const SignInPage = () => {

    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
        if (fullName === '' || password === '')
            return
        await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fullName, password})
        })
            .then(response => {
                console.log('Успешный ответ:', response.data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }

    return (
        <CSSTransition>
            <div className='sign-in-wrapper'>
                <div className='input-wrapper' style={{marginBottom: '10px'}}>
                    <input
                        className='input-field'
                        value={fullName}
                        placeholder='Фамилия Имя'
                        onChange={(event) => setFullName(event.target.value)}
                    />
                    <div
                        className='input-border'
                    />
                    <div
                        className='input-background'
                    />
                </div>
                <div className='input-wrapper' style={{marginBottom: '20px'}}>
                    <input
                        className='input-field'
                        value={password}
                        type='password'
                        placeholder='Введите пароль'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div
                        className='input-border'
                    />
                    <div
                        className='input-background'
                    />
                </div>
                <div className='btn' onClick={handleSignIn}>
                    Войти
                </div>
            </div>
        </CSSTransition>
    )
}

export default SignInPage