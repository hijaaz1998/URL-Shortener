import { nanoid } from 'nanoid'
import URL from '../models/url.js'


const generateShortUrl = async(req,res)=>{
    try{
        const body = req.body

        console.log(body,'detials')
        if(!body.url){
            return res.status(400).json({message:"Url required"})
        }
          const uid= nanoid(8)

      const shortUrl =  await URL.create({
            shortId:uid,
            newUrl :`http://localhost:5173/${uid}`,
            redirectUrl:body.url,
            visitHistory:[]
        })

        return res.status(201).json({id:uid})
    }catch(error){
        console.log(error)
    }
} 

const redirectUrl = async(req,res)=>{
    const getUrl = req.query.shortid
   
    const result = await URL.findOne({shortId:getUrl})
    if(result){
        res.status(200).json({newurl:result.redirectUrl})
    }
}
export {  generateShortUrl,redirectUrl}

  