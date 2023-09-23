import React, {useState} from 'react'
import './styles.css'

const SignUpPage = () => {

    const [fullName, setFullName] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [password, setPassword] = useState('')

    const formatPhoneNumber = (inputPhoneNumber) => {
        const cleanedPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, '');

        let formattedPhoneNumber = '';
        if (cleanedPhoneNumber.length >= 1) {
            formattedPhoneNumber = '+7-' + cleanedPhoneNumber.slice(1, 4);
        }
        if (cleanedPhoneNumber.length >= 4) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(4, 7);
        }
        if (cleanedPhoneNumber.length >= 7) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(7, 9);
        }
        if (cleanedPhoneNumber.length >= 9) {
            formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(9, 11);
        }
        return formattedPhoneNumber;
    };

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value;
        const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
        setNumberPhone(formattedPhoneNumber);
    };

    const handleSignUp = async () => {
        if (fullName === '' || numberPhone === '' || password === '')
            return
        await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fullName, numberPhone, password})
        })
            .then(response => {
                console.log('Успешный ответ:', response.data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }

    return (
        <div className='sign-up-wrapper'>

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
            <div className='input-wrapper' style={{marginBottom: '10px'}}>
                <input
                    className='input-field'
                    value={numberPhone}
                    placeholder='Номер телефона'
                    onChange={handlePhoneNumberChange}
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
                    placeholder='Придумайте пароль'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div
                    className='input-border'
                />
                <div
                    className='input-background'
                />
            </div>
            <div className='btn' onClick={handleSignUp}>
                Далее
            </div>

        </div>
    )
}

export default SignUpPage