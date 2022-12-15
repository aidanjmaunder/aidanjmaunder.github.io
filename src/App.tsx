import React from 'react'
import './App.css'

/* components */
import Nav from './components/Nav'
import About from './components/About'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'

/* libraries */
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { motion } from 'framer-motion'

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
        <motion.div
          key='submitted'
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4, ease: 'easeIn' }}
        >
          <About />
          <Gallery />
        </motion.div>
        <ContactForm />
      </div>
    </ChakraProvider>
  )
}

export default App
