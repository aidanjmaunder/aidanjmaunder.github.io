import React from 'react'

/* libraries */
import { Container, Divider, Flex, Heading, Link, Show, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
      <Container
        alignItems='center'
        id='about'
        display='flex'
        minH={{ base: 'auto', lg: 'calc(90vh - 1rem)' }}
        maxW='1600px'
        py={{ base: 8, lg: 2 }}
      >
        <VStack spacing={4}>
          <Heading as='h3' fontWeight={500} size='xl' textAlign='center'>
            Hello, I'm aidan
          </Heading>
          <Heading
            as='h4'
            fontFamily='Lato, sans-serif'
            fontSize={{ base: 'sm', lg: 'md' }}
            fontWeight={400}
            opacity={0.5}
            textAlign='center'
          >
            Front End Developer / Web & UI Designer / Hobbyist Game Developer
          </Heading>
          <Divider maxW={200} borderColor='#6a6a6a' opacity={1} />
          <Text fontSize={{ base: 'sm', lg: 'lg' }} textAlign='center'>
            I started out as a freelance designer over 14 years ago. I have been working in agencies
            primarily on SaaS products for the last sevenish years. I'm very passionate about
            creating clean and easy to use interfaces. Lately I've been developling primarily with
            React and designing via Figma.
          </Text>
          <Text fontSize={{ base: 'sm', lg: 'lg' }} textAlign='center'>
            I'm also a hobbyist game developer that dabbles with building small traditional
            roguelikes, platformers, and puzzle games. I generally use{' '}
            <Link href='https://godotengine.org/' isExternal>
              Godot
            </Link>{' '}
            and{' '}
            <Link
              href='https://python-tcod.readthedocs.io/en/latest/tcod/getting-started.html'
              isExternal
            >
              python-tcod.
            </Link>
          </Text>
          <Text fontSize={{ base: 'sm', lg: 'lg' }} textAlign='center'>
            In my downtime you can usually find me playing hockey, writing music, or out on a trail
            with my dogs or my bike.
          </Text>
        </VStack>
      </Container>
      <Show above='lg'>
        <Flex flexDirection='column' justifyContent='center' minH='calc(10vh - 1rem)'>
          <FontAwesomeIcon icon={faAnglesDown} />
        </Flex>
      </Show>
    </>
  )
}

export default About
