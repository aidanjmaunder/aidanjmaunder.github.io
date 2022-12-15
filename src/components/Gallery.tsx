import React from 'react'

/* libraries */
import { Box, Container, Image, Stack } from '@chakra-ui/react'

const Gallery = () => {
  return (
    <Container maxW='1600px' alignItems='center'>
      <Box w='100%' py={6}>
        <Image src='./images/dashboard.png' alt='dashboard concept' />
      </Box>
      <Stack w='100%' direction={['column', 'row']} spacing='6' flex='1'>
        <Box>
          <Image src='./images/light-library.png' alt='music player - library - light theme' />
        </Box>
        <Box>
          <Image src='./images/light-playing.png' alt='music player - playing - light theme' />
        </Box>
        <Box>
          <Image src='./images/dark-library.png' alt='music player - library - dark theme' />
        </Box>
        <Box>
          <Image src='./images/dark-playing.png' alt='music player - library - dark theme' />
        </Box>
      </Stack>
    </Container>
  )
}

export default Gallery
