import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'

function App() {

  return (
    <div>
       <Navigation/>
       <main className='main_container'>
       <ContactHeader/>
       <ContactForm/>
       </main>
    </div>

  )
}

export default App
