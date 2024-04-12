import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useUrlredirectingMutation } from '../slices/urlSlice'
import { toast } from 'react-toastify'

function RedirectPage() {
   const [urlFetch,{isLoading}] = useUrlredirectingMutation()
    const {id} = useParams()

    console.log(id,'iddd')

    const fetchUrl = async(shortid)=>{
        try{
         const result = await urlFetch(shortid)

         console.log(result,'resulttt')
         if(result.data){
            location.href = result.data.newurl
           
         }else{
            toast.error("Error Occured while Fetching")
         }
        }catch(error){
            console.log(error)
            toast.error("Server error")
        }
    }
    useEffect(()=>{
        fetchUrl(id)
    },[])
  return null
}

export default RedirectPage