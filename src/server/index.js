const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./database')
const user = require('./database/Models/users')

const app = express()

const port = 8080

app.listen(port, () => {
    console.log('Сервер запущен')
})

app.use(cors())

app.use(bodyParser.json())

app.post('/api/users/register', async (req, res) => {
    try {
        const { fullName, numberPhone, password } = req.body

        const newUser = new user({
            fullName,
            numberPhone,
            password
        })
        await newUser.save()
        res.status(201).json({ message: 'Register' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'ERROR' })
    }
})

app.post('/api/users/login', async (req, res) => {
    try {
        const { fullName, password } = req.body

        const searchUser = await user.findOne({ fullName: fullName, password: password })

        if (searchUser) {
            res.status(201).json({ message: 'Login' })
        } else {
            res.status(404).json({ message: 'Bad login' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'ERROR' })
    }
})
