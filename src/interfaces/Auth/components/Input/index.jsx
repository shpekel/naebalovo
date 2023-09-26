import React from 'react'
import './styles.css'

const Input = ({ value, setValue, placeholder, style, type }) => {
    return (
        <div className="input-wrapper" style={style}>
            <input
                className="input-field"
                value={value}
                placeholder={placeholder}
                type={type}
                maxLength={30}
                onChange={setValue}
            />
            <div className="input-border" />
            <div className="input-background" />
        </div>
    )
}

export default Input
