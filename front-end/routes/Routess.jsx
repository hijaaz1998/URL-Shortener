import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../page/Home'
import RedirectPage from '../page/RedirectPage'

function Routess() {
  return (
   <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/:id' element={<RedirectPage/>} />
   </Routes>
  )
}

export default Routess