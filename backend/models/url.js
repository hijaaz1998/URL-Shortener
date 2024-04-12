import mongoose from 'mongoose'

const urlSechema = new mongoose.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        require:true
    },
    visitHistory: [{ timeStamp: {type:Number}}]
},
{timestamps:true}

)

const URL = mongoose.model('url',urlSechema)

export default  URL 
