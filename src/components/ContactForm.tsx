import React, { useRef, useState } from 'react'

/* libraries */
import emailjs from '@emailjs/browser'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
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
    console.log('fired')
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
    <Container maxW='1600px' minH='calc(50vh)' display='flex' alignItems='center'>
      <AnimatePresence>
        {emailSent ? (
          <Container centerContent>
            <motion.div
              key='submitted'
              initial={{ y: '120%', opacity: 0, scale: 1 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              <VStack spacing={6}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <Heading as='h3' size='lg' textAlign='center' fontWeight={500}>
                  Your message has been sent.
                </Heading>
              </VStack>
            </motion.div>
          </Container>
        ) : (
          <FormControl
            as='form'
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            isInvalid={errors ? true : false}
          >
            <motion.div
              key='form'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: 'easeIn' }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
            >
              <VStack spacing={4} align='stretch'>
                <Heading as='h3' size='lg' fontWeight={500}>
                  Contact Me
                </Heading>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FontAwesomeIcon icon={faUser} />}
                  />
                  <Input
                    type='text'
                    {...register('from_name', { required: true })}
                    placeholder='Name'
                    isInvalid={errors.from_name ? true : false}
                  />
                </InputGroup>
                {errors.from_name && <FormErrorMessage>Your name is required</FormErrorMessage>}

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FontAwesomeIcon icon={faEnvelope} />}
                  />
                  <Input
                    type='email'
                    {...register('from_email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                    placeholder='Email'
                    isInvalid={errors.from_email ? true : false}
                  />
                </InputGroup>
                {errors.from_email && (
                  <FormErrorMessage>A valid email is required</FormErrorMessage>
                )}

                <Textarea
                  {...register('message', { required: true })}
                  placeholder='Message'
                  isInvalid={errors.message ? true : false}
                />
                {errors.message && <FormErrorMessage>A message is required</FormErrorMessage>}

                <Button colorScheme='blue' type='submit' value='Send'>
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
