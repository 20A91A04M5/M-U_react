import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetchprod from './Mounting'
import Singlecard from './Updatings'

function App() {

  return (
    <>
      <Fetchprod />
      <br />
      <Singlecard />
    </>
  )
}

export default App
