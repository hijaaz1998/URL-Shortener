import mongoose from "mongoose"

const connectDb = async(url)=>{
    console.log(url,'url')

    try{
      const connection = await mongoose.connect(url)
        console.log("mongoDb connected succesfully",connection.connection.host)
    }catch(error){
        console.log(error)
    }
}

export  default
    connectDb