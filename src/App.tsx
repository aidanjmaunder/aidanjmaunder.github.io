import React from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import Nav from './components/Nav'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const fonts = {
  heading: `'Libre Baskerville', serif`,
  body: `'Roboto', sans-serif`,
}

const theme = extendTheme({ fonts })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='app'>
        <Nav />
        <ContactForm />
      </div>
    </ChakraProvider>
  )
}

export default App
