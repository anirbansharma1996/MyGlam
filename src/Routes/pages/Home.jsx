import { Box, Grid, GridItem, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Autoplay from './Autoplay'

const Home = () => {
  const Navigate=useNavigate()
  return (
    <VStack bgColor='#f4f4f4' maxW='fit-content'>

  <Stack >

  <HStack padding='30px 10px' justify='center'>
      
      <Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)'  alignSelf='center' fontSize='2xl'  as='b'>IN THE SPOTLIGHT</Text>
  </HStack>
    <Stack p={{base:25,md:50,}}   direction={{base:"column",md:"column", lg:"row"}} maxW="1400px"
     margin='auto'  gap={6}>

    <Box >
    <Image onClick={()=>Navigate('/makeup')}  w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>Makeup Under ₹399</Text>
    </Box>
    <Box>
    <Image onClick={()=>Navigate('/haircare')}  w='100%' src='https://files.myglamm.com/site-images/original/700x488sf.gif'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>Superfood Onion moringa range</Text>
    </Box>
    <Box>
    <Image onClick={()=>Navigate('/makeup')}  w='100%' src='https://files.myglamm.com/site-images/original/700x488wpo_1.gif'/>
  <Text fontWeight='500' padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>Shop Ultimate Liquid Lipstick</Text>
    </Box>
 

 
    </Stack>

   
  </Stack>
    
  <HStack  p={{base:25,md:45,}} >
      <Image onClick={()=>Navigate('/collection')}  w='100%' src='https://files.myglamm.com/site-images/original/2240x614mg.jpg'/>
    </HStack>
    <HStack padding='30px 10px' justify='center'>
      
      <Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)'  alignSelf='center' fontSize='2xl'  as='b'>LATEST GLAMM LAUNCHES</Text>
  </HStack>
  <SimpleGrid p={{base:25,md:50,}}   columns={{base:2, md:2, lg:4}} maxW="1400px"
     margin='auto'  gap={6}>

    <Box>
    <Image onClick={()=>Navigate('/makeup')}  w='100%' src='https://files.myglamm.com/site-images/original/700X488_2.gif'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>Pucker up lip balm kit</Text>
    </Box>
    <Box>
    <Image onClick={()=>Navigate('/makeup')}  w='100%' src='https://files.myglamm.com/site-images/original/mg700x488.jpg'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>LIT Lip & Cheek Rouge</Text>
    </Box>
    <Box>
    <Image onClick={()=>Navigate('/skincare')}  w='100%' src='https://files.myglamm.com/site-images/original/Strobing-Cream-700x488.png'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>Glowing Skin Essentials</Text>
    </Box>
    <Box>
    <Image onClick={()=>Navigate('/makeup')}  w='100%' src='https://files.myglamm.com/site-images/original/700x488lgl_1.jpg'/>
  <Text fontWeight='500'  padding='10px 20px' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign='center'>LIT Matte About It Lip Color</Text>
    </Box>
 
 

 
    </SimpleGrid>
    <HStack  p={{base:25,md:45,}} >
      <Image onClick={()=>Navigate('/rewards')}   w='100%' src='https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg'/>
    </HStack>

   
      <Autoplay/>

    <VStack >
    <HStack padding='30px 10px' justify='center'>
      
      <Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)'  alignSelf='center' fontSize='2xl'  as='b'>BANK PARTNER</Text>
  </HStack>
      <HStack>
        <Image w='100%' src='https://files.myglamm.com/site-images/original/IDFC-offer-3360x279_5.jpg'/>
      </HStack>
    </VStack>

    <SimpleGrid p={{base:25,md:50,}} maxW='1400px' columns={{base:1, md:1, lg:1}}>
      <Image src='https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png'/>
    </SimpleGrid>
        
        
    <iframe  Autoplay width="90%" height="409" src="https://www.youtube.com/embed/GdcxfyKNiDg" title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    >

    </iframe>
    
    </VStack>
  )
}

export default Home
