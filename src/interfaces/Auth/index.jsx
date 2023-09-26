import React from 'react'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import CardSelectorPage from './pages/CardSelectorPage'
import './styles.css'

const Auth = () => {
    return (
        <>
            <SignUpPage />
            <SignInPage />
            <CardSelectorPage />
        </>
    )
}

export default Auth
