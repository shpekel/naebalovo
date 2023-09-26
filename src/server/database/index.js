const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/naebalovo'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURL)
        console.log('MongoDB database is ready.')
    } catch (error) {
        console.error('MongoDB error: ', error)
    }
    return mongoose
}

module.exports = connectToMongoDB()
