import express from 'express'
import  {generateShortUrl,redirectUrl} from '../controller/url.js'
const router = express.Router()


router.post('/',generateShortUrl)
router.get('/redirect',redirectUrl)


export default  router