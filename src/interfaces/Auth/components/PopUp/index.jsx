import React, { useEffect, useRef } from 'react'
import './styles.css'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'
import Button from '../Button'
const PopUp = ({ name, text, param, success, exit }) => {
    const popUp = useSelector((state) => state.authReducer.popup)
    const isOpen = popUp === name

    const nodeRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                exit()
            }
        }

        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [exit])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={250}
            classNames="pop-up-background"
            mountOnEnter
            unmountOnExit
        >
            <div className="pop-up-background" ref={nodeRef}>
                <div className="pop-up-wrapper" ref={wrapperRef}>
                    <div className="pop-up-header" style={{ marginBottom: '25px' }}>
                        <p style={{ marginBottom: '5px' }}>{text}</p>
                        <p>{param}</p>
                    </div>
                    <div className="btn-wrapper">
                        <Button
                            text='Да'
                            onClick={success}
                        />
                        <Button
                            text='Нет'
                            onClick={exit}
                        />
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default PopUp
