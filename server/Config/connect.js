import mongoose from 'mongoose'
import {DB_NAME} from '../Utils/constants'


const connect = () => {
   const dbconnect =  mongoose.connect(`${process.env.MONGOBD_URL}/${DB_NAME}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   })

   dbconnect.then(()=>
   {
    console.log("Database connected Successfully",dbconnect.collection)
   })
   .catch((error)=>{
    console.log("Error Occured in database connection",error.message);
   })
}

export {connect}
