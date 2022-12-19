import React from 'react'

/* components */
import Badge from './Badge'

/* libraries */
import { Divider, Flex, Grid, Heading } from '@chakra-ui/react'
import {
  faHtml5,
  faFigma,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCameraRetro,
  faPenNib,
  faBookOpen,
  faFilm,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'

const skills = [
  {
    id: 0,
    icon: faHtml5,
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 1,
    icon: faFigma,
    name: 'Figma',
    url: 'https://www.figma.com/',
  },
  {
    id: 2,
    icon: faCss3,
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 3,
    icon: faCameraRetro,
    name: 'Photoshop',
    url: 'https://www.adobe.com/ca/products/photoshop.html',
  },
  {
    id: 4,
    icon: faJs,
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 5,
    icon: faPenNib,
    name: 'Illustrator',
    url: 'https://www.adobe.com/ca/products/illustrator.html',
  },
  {
    id: 6,
    icon: faReact,
    name: 'React',
    url: 'https://reactjs.org/',
  },
  {
    id: 7,
    icon: faBookOpen,
    name: 'InDesign',
    url: 'https://www.adobe.com/ca/products/indesign.html',
  },
  {
    id: 8,
    icon: faVuejs,
    name: 'Vue.js',
    url: 'https://vuejs.org/',
  },
  {
    id: 9,
    icon: faFilm,
    name: 'Premiere',
    url: 'https://www.adobe.com/ca/products/premiere.html',
  },
  {
    id: 10,
    icon: faNodeJs,
    name: 'Node.js',
    url: 'https://nodejs.org/en/',
  },
  {
    id: 11,
    icon: faMusic,
    name: 'Reaper',
    url: 'https://www.reaper.fm/',
  },
]

const Skills = () => {
  return (
    <Flex flexDirection='column'>
      <Heading as='h2' fontWeight={500} size='sm' textAlign='center'>
        Skills & Technologies
      </Heading>

      <Divider my={2} borderColor='#2d3035' opacity={1} />

      <Grid
        gap={3}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
      >
        {skills.map(skill => (
          <Badge icon={skill.icon} key={skill.id} name={skill.name} url={skill.url} />
        ))}
      </Grid>
    </Flex>
  )
}

export default Skills
