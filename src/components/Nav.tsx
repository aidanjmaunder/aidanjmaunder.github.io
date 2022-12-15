import React from 'react'

/* libraries */
import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <header>
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.8, ease: 'easeOut' }}
      >
        <Heading as='h1' size='xl' p={[4, 4, 4, 8]} fontWeight={500}>
          aidan maunder
        </Heading>
      </motion.div>
    </header>
  )
}

export default Nav
