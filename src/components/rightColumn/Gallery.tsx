import React from 'react'

/* libraries */
import { Box, Container, Divider, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'

const Gallery = () => {
  return (
    <Container alignItems='center' maxW='1600px'>
      <VStack my={{ base: 6, lg: 12 }} spacing={4}>
        <Heading as='h3' fontWeight={500} size='lg'>
          UI Concepts
        </Heading>
        <Divider maxW={200} opacity={0.2} />
      </VStack>

      <VStack spacing={{ base: 12, lg: 20 }}>
        <Box>
          <Heading w='100%' as='h4' fontWeight={500} size='md'>
            Dashboard
          </Heading>
          <Text w='100%' fontSize='sm'>
            Music Listening History
          </Text>
          <Divider my={2} opacity={0.06} />
          <Image src='./images/dashboard.png' alt='dashboard concept' my={2} />
          <Divider my={2} opacity={0.06} />
        </Box>

        <Box>
          <Heading w='100%' as='h4' fontWeight={500} size='md'>
            Mobile App
          </Heading>
          <Text w='100%' fontSize='sm'>
            Music Player
          </Text>
          <Divider my={2} opacity={0.06} />
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', '2xl': 'repeat(4, 1fr)' }} gap={6}>
            <Image src='./images/light-library.png' alt='music player - library - light theme' />
            <Image src='./images/light-playing.png' alt='music player - playing - light theme' />
            <Image src='./images/dark-library.png' alt='music player - library - dark theme' />
            <Image src='./images/dark-playing.png' alt='music player - library - dark theme' />
          </Grid>
          <Divider my={2} opacity={0.06} />
        </Box>
      </VStack>
    </Container>
  )
}

export default Gallery
