import React from 'react'

/* libraries */
import { Box, Flex, Link, Spacer } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
  icon: IconProp

  name: string

  url: string
}

const Badge = (props: Props) => {
  return (
    <Flex
      as={Link}
      className='badge'
      flex='1 0 auto'
      href={props.url}
      isExternal
      px={4}
      py={2}
      transition='.1s ease-in-out'
    >
      <Box alignSelf='center' fontSize={{ base: 14, md: 16 }}>
        <FontAwesomeIcon icon={props.icon} />
        <Spacer display='inline-block' w={2} />
        {props.name}
      </Box>
    </Flex>
  )
}

export default Badge
