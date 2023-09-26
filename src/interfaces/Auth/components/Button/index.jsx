import React from 'react'
import './styles.css'

const Button = ({ text, onClick, type, style }) => {
    return (
        <div className={`btn type-${type === 1 ? '1' : '0'}`} onClick={onClick} style={style}>
            {text}
        </div>
    )
}

export default Button
