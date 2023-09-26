import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, setPopUp, setCurrentCard, setConfirmCard } from '../../reducer'
import PopUp from '../../components/PopUp'
import Button from '../../components/Button'
import { AnimatePresence, motion } from 'framer-motion'
import CardOne from '../../assets/CardOne'
import CardTwo from '../../assets/CardTwo'
import CardThree from '../../assets/CardThree'
import CardFour from '../../assets/CardFour'

const generateRandomCardNumber = () => {
    const cardNumber = []
    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) {
            cardNumber.push(' ') // Добавляем пробел после каждой группы из 4 цифр
        }
        const randomDigit = Math.floor(Math.random() * 10)
        cardNumber.push(randomDigit)
    }
    return cardNumber.join('')
}

const CardSelectorPage = () => {
    const page = useSelector((state) => state.authReducer.page)
    const currentCard = useSelector((state) => state.authReducer.currentCard)
    const confirmCard = useSelector((state) => state.authReducer.confirmCard)
    const fullNameRegister = useSelector((state) => state.authReducer.fullNameRegister)
    const dispatch = useDispatch()
    const isOpen = page === 'card-selector'

    const [cardNumbers, setCardNumbers] = useState([])
    const [designCard, setDesignCard] = useState(0)

    const nodeRef = useRef(null)

    const handleChangeNumber = (card) => {
        dispatch(setCurrentCard(card))
        dispatch(setPopUp('verify-card'))
    }

    const handleSignIn = async () => {
        // if (fullName === '' || password === '') return
        // await fetch('http://localhost:8080/api/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ fullName, password })
        // })
        //     .then((response) => {
        //         console.log('Успешный ответ:', response.data)
        //     })
        //     .catch((error) => {
        //         console.error('Ошибка:', error)
        //     })
    }

    const handleDesignCard = (card) => {
        if (card === designCard) {
            setDesignCard(0)
        } else {
            setDesignCard(card)
        }
    }

    useEffect(() => {
        const generateCardNumbers = () => {
            const newCardNumbers = []
            for (let i = 0; i < 6; i++) {
                newCardNumbers.push(generateRandomCardNumber())
            }
            setCardNumbers(newCardNumbers)
        }

        generateCardNumbers()
    }, [])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={250}
            classNames='card-selector-wrapper'
            mountOnEnter
            unmountOnExit
        >
            <>
                <PopUp
                    name='verify-card'
                    text='Вы уверены, что хотите выбрать именно этот номер карты?'
                    param={currentCard}
                    success={() => dispatch(setConfirmCard(true))}
                    exit={() => dispatch(setConfirmCard(false))}
                />
                <div className='card-selector-wrapper' ref={nodeRef}>
                    <div className='card-selector-header' style={{ marginBottom: '25px' }}>
                        <svg
                            width='15%'
                            height='15%'
                            style={{ marginBottom: '25px' }}
                            viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'
                            className='icon-success'>
                            <path fill='#33FF99'
                                  d='M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z' />
                        </svg>
                        <p style={{ marginBottom: '5px' }}>Отлично!</p>
                        <p>
                            Выберите понравившийся {confirmCard === false ? 'номер' : 'дизайн'}{' '}
                            карты
                        </p>
                    </div>
                    <AnimatePresence>
                        {designCard === 1 && (
                            <motion.div
                                className='card-image-wrapper _one'
                                onClick={() => handleDesignCard(1)}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '313px' }}
                                exit={{ opacity: 0, height: 0}}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <>
                                    <div className='card-image-background' />
                                    <CardOne
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                        type={1}
                                    />
                                </>
                            </motion.div>
                        )}
                        {designCard === 2 && (
                            <motion.div
                                className='card-image-wrapper _one'
                                onClick={() => handleDesignCard(2)}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '313px' }}
                                exit={{ opacity: 0, height: 0}}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <>
                                    <div className='card-image-background' />
                                    <CardTwo
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                        type={1}
                                    />
                                </>
                            </motion.div>
                        )}
                        {designCard === 3 && (
                            <motion.div
                                className='card-image-wrapper _one'
                                onClick={() => handleDesignCard(3)}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '313px' }}
                                exit={{ opacity: 0, height: 0}}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <>
                                    <div className='card-image-background' />
                                    <CardThree
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                        type={1}
                                    />
                                </>
                            </motion.div>
                        )}
                        {designCard === 4 && (
                            <motion.div
                                className='card-image-wrapper _one'
                                onClick={() => handleDesignCard(4)}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '313px' }}
                                exit={{ opacity: 0, height: 0}}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <>
                                    <div className='card-image-background' />
                                    <CardFour
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                        type={1}
                                    />
                                </>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {confirmCard === true && designCard === 0 && (
                            <motion.div
                                className='cards-wrapper'
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: '328px' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <div className='card-image-wrapper' onClick={() => handleDesignCard(1)}>
                                    <div className='card-image-background' />
                                    <CardOne
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                    />
                                </div>
                                <div className='card-image-wrapper' onClick={() => handleDesignCard(2)}>
                                    <div className='card-image-background' />
                                    <CardTwo
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                    />
                                </div>
                                <div className='card-image-wrapper' onClick={() => handleDesignCard(3)}>
                                    <div className='card-image-background' />
                                    <CardThree
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                    />
                                </div>
                                <div className='card-image-wrapper' onClick={() => handleDesignCard(4)}>
                                    <div className='card-image-background' />
                                    <CardFour
                                        fullName={fullNameRegister}
                                        cardNumber={currentCard}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {confirmCard === false && (
                            <motion.div
                                className='cards'
                                initial={{ opacity: 1, height: 'auto' }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <>
                                    {cardNumbers.map((card, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => handleChangeNumber(card)}
                                            text={card}
                                            type={1}
                                        />))}
                                </>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {confirmCard === true && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <Button
                                    onClick={handleSignIn}
                                    style={{ marginTop: '20px' }}
                                    text='Далее'
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </>
        </CSSTransition>
    )
}

export default CardSelectorPage