import React from 'react'

/* libraries */
import { Box, Container, Image, Stack } from '@chakra-ui/react'

const Gallery = () => {
  return (
    <Container alignItems='center' maxW='1600px'>
      <Box py={6} w='100%'>
        <Image src='./images/dashboard.png' alt='dashboard concept' />
      </Box>
      <Stack direction={['column', 'row']} flex='1' spacing='6' w='100%'>
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
