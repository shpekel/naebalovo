import React, { useEffect } from 'react'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { send, remove, removeRender } from './reducer'
import { AnimatePresence, motion } from 'framer-motion'

const Notifications = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.notificationsReducer.list)

    useEffect(() => {
        window.sendNotify = (data) => {
            dispatch(send(data))
        }

        window.removeNotify = (id) => {
            dispatch(removeRender(id))
            dispatch(remove(id))
        }
    }, [])

    return (
        <>
            <div className='notifications'>
                <AnimatePresence>
                    {list.map(({ id, type, text }) => (
                        <motion.div
                            key={id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='notify'>
                                {text}
                                <div
                                    className='status'
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </>
    )
}

export default Notifications
