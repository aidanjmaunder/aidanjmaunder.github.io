import React, { useRef, useState } from 'react'

/* libraries */
import emailjs from '@emailjs/browser'
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false)

  const form = useRef<any>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const sendEmail = () => {
    setEmailSent(true)

    emailjs
      .sendForm('contact_service', 'contact_form', form.current as any, 'F9w2Kb-NiuyYfPmYT')
      .then(
        (result: { status: number; text: string }) => {
          console.log(result.text)
        },
        (error: { text: string }) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container
      alignItems='center'
      display='flex'
      id='contact'
      maxW='1600px'
      minH={{ base: 'auto', lg: 'calc(100vh - 2rem)' }}
      py={{ base: 20, lg: 2 }}
    >
      <AnimatePresence>
        {emailSent ? (
          <Container centerContent>
            <motion.div
              animate={{ y: 0, opacity: 1, scale: 1 }}
              initial={{ y: '120%', opacity: 0, scale: 1 }}
              key='submitted'
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <VStack spacing={6}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <Heading as='h3' fontWeight={500} size='lg' textAlign='center'>
                  Your message has been sent.
                </Heading>
              </VStack>
            </motion.div>
          </Container>
        ) : (
          <FormControl
            as='form'
            isInvalid={errors ? true : false}
            onSubmit={handleSubmit(sendEmail)}
            ref={form}
          >
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
              initial={{ opacity: 0 }}
              key='form'
              transition={{ delay: 0.6, duration: 0.4, ease: 'easeIn' }}
            >
              <VStack align='stretch' spacing={4}>
                <Heading as='h3' fontWeight={500} size='lg' textAlign='center'>
                  Contact Me
                </Heading>
                <Text fontSize='md' opacity={0.5} textAlign='center'>
                  Feel free to reach out and I'll get back to you as soon as possible.
                </Text>
                <Divider alignSelf='center' borderColor='#6a6a6a' maxW={200} opacity={1} />
                <InputGroup>
                  <InputLeftElement
                    children={<FontAwesomeIcon icon={faUser} />}
                    pointerEvents='none'
                  />
                  <Input
                    {...register('from_name', { required: true })}
                    isInvalid={errors.from_name ? true : false}
                    placeholder='Name'
                    type='text'
                  />
                </InputGroup>
                {errors.from_name && <FormErrorMessage>Your name is required</FormErrorMessage>}

                <InputGroup>
                  <InputLeftElement
                    children={<FontAwesomeIcon icon={faEnvelope} />}
                    pointerEvents='none'
                  />
                  <Input
                    {...register('from_email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                    isInvalid={errors.from_email ? true : false}
                    placeholder='Email'
                    type='email'
                  />
                </InputGroup>
                {errors.from_email && (
                  <FormErrorMessage>A valid email is required</FormErrorMessage>
                )}

                <Textarea
                  {...register('message', { required: true })}
                  isInvalid={errors.message ? true : false}
                  placeholder='Message'
                />
                {errors.message && <FormErrorMessage>A message is required</FormErrorMessage>}

                <Button type='submit' value='Send'>
                  Submit
                </Button>
              </VStack>
            </motion.div>
          </FormControl>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default ContactForm
