

const healthCheck =  async(req,res)=>{
    try {
        return res.status(200).json({
            message:"Health is ok , server is running.."
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong, Please check Your connection"
        })
    }
}


export {healthCheck}