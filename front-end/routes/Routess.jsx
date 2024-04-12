import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../page/Home'
import Count from '../page/Count'
import RedirectPage from '../page/RedirectPage'

function Routess() {
  return (
   <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/count' element={<Count/>} />

      <Route path= '/:id' element={<RedirectPage/>} />


   </Routes>
  )
}

export default Routess