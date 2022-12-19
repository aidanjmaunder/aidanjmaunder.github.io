import React from 'react'

/* libraries */
import { Divider, Flex, Heading, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <Flex as='header' flexDirection='column' mb={8}>
      <Link className='logo' href='#about'>
        <Heading as='h1' fontWeight={500} size='xl' textAlign='center'>
          aidan maunder
        </Heading>
      </Link>
      <Divider my={2} borderColor='#2d3035' opacity={1} />
      <Flex alignSelf='center' className='networks' justifyContent='space-around'>
        <Link href='#contact'>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link href='https://github.com/aidanjmaunder' isExternal>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href='https://www.linkedin.com/in/aidan-maunder-24499365/' isExternal>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
