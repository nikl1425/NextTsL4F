import { Container, Stack, Heading, Text, Center } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
    <Container h={'100%'} maxW={'7xl'} >
      <Center h={400}>
      <Stack align={'center'}>
        <Stack>
          <Heading
          as={'h1'} 
          fontWeight={'bold'}
          fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
            Velkommen til Learn4Fun
          </Heading>
          <Text as={'h2'} fontSize={{base: 'lg', small: 'md'}} textAlign={'center'} fontWeight={'semibold'} color={'blue.300'}>
            Et Læringsunivers for Tech Entusiatister
          </Text>
        </Stack>
      </Stack>  
      </Center>
      
    </Container>
    </>
  )
}
