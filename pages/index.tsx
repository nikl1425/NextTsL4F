import { Container, Stack, Heading, Text, Center, Wrap, Button } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import FontAwesomeWrap from "../src/components/Icons/FontAwesomeWrap";

export default function Home() {
  return (
    <>
      <Container h={'100%'} maxW={'7xl'} >
        <Center h={400}>
          <Stack align={'center'}>
            <Wrap m={0} color={'green.700'}>
              <FontAwesomeIcon size="3x" icon={faGraduationCap} />
            </Wrap>
            <Stack marginTop='0'>
              <Heading
                as={'h1'}
                fontWeight={'bold'}
                fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
                textShadow="4px 4px #D6D6D6"
                marginTop='0'>
                Velkommen til Learn<Text fontSize={{ base: '3xl', lg: '6xl' }} color={'green.400'} as={'span'}>4</Text>Fun
              </Heading>
              <Text textShadow='2xl' as={'h2'} fontSize={{ base: 'lg', small: 'md' }} textAlign={'center'} fontWeight={'semibold'} color={'gray.400'}>
                Et Læringsunivers for Tech Entusiatister
              </Text>
            </Stack>
            <Container marginTop='20px' w={'full'}>
              <Center>
                <Stack direction={'row'} spacing={'25px'}>
                  <Button rounded={10} bg={'green.300'}>Udforsk Kurser</Button>
                  <Button rounded={10} bg={'gray.200'}>
                    <FontAwesomeIcon icon={faPlayCircle}/>
                    <Text mx={1}>Intro Video</Text>
                    </Button>
                </Stack>
              </Center>
            </Container>
          </Stack>
        </Center>
      </Container>
    </>
  )
}
