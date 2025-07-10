// import React from 'react'
import {  Signin } from './components/signin'
import { Signup } from './components/signup'

const App = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Signin />
      </div>
    </div>
  )
}

export default App
