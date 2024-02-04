import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log(`proces.env: ${process.env.MONGO_UR}`)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected: ' + conn.connection.host)
  } catch (err) {
    console.log('Error: ' + err)
  }
}

export default connectDB
