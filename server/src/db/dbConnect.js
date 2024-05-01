import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const dbConnect = async()=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        if(response){
            console.log("Database connected Successfully at host", response.connection.host)
        }
    } catch (error) {
        console.log("Database not connected due to ..", error)
        process.exit(1);
        
    }

}

export {dbConnect};