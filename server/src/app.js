import express from 'express'
const app = express();


import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
})


// importing routes 
import healthcheck from './routes/healthcheck.routes.js';


// apis for routes 
app.use('/api/v1', healthcheck);




export {app};