import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Routess from '../routes/Routess'
import './App.css'

function App() {
 function handleclick(e){
e.preventDefault()
 }
  
useEffect(()=>{
  document.addEventListener('contextmenu',handleclick)
},[])
  return (
    <>
     <Routess />
    </>
  )
}

export default App
