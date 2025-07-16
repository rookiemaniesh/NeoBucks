import React from 'react'
import Dashboard from './components/dashboard'
import {  Signin } from './components/signin'
import { Signup } from './components/signup'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './components/landing'
import Send from './components/send'
import SearchTab from './components/Searchtab'

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/send' element={<Send/>}/>
    <Route path='/search' element={<SearchTab/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
