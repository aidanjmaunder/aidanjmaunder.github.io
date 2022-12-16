import React from 'react'

/* styles */
import './App.css'

/* components */
import Header from './components/leftColumn/Header'
import Gallery from './components/rightColumn/Gallery'
import ContactForm from './components/rightColumn/ContactForm'

/* libraries */
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
  shouldForwardProp,
  useMediaQuery,
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Skills from './components/leftColumn/Skills'

const fonts = {
  heading: `'Libre Baskerville', serif`,
  body: `'Roboto', sans-serif`,
}

const theme = extendTheme({ fonts })

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const variants = {
  mobile: { y: '-100%', opacity: 0, scale: 1 },
  desktop: { x: '-100%', opacity: 0, scale: 1 },
}

function App() {
  const viewportWidth = window.innerWidth
  console.log(viewportWidth)

  return (
    <ChakraProvider theme={theme}>
      <Flex className='app' flexDirection={{ base: 'column', lg: 'row' }} maxH={{ lg: '100vh' }}>
        <ChakraBox
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          as={motion.div}
          borderBottom={{ base: '2px solid #2d3035', lg: 'none' }}
          borderRight={{ base: 'none', lg: '2px solid #2d3035' }}
          className='leftPanel'
          flex='1 0 auto'
          h={{ lg: '100vh' }}
          initial={viewportWidth <= 991 ? 'mobile' : 'desktop'}
          maxW={{ lg: '380px' }}
          p={{ base: 5, lg: 10 }}
          // @ts-ignore
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
          variants={variants}
        >
          <Header />
          <Skills />
        </ChakraBox>

        <Box className='rightPanel' flex='1 1 auto' overflow={{ lg: 'auto' }} p={[4, 4, 4, 8]}>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: 'easeIn' }}
          >
            <Gallery />
          </motion.div>
          <ContactForm />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
