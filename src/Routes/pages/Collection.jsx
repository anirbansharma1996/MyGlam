import { Box, Divider, HStack, Image, SimpleGrid, Text ,VStack} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
const Collection = () => {
    const {AllData} = useContext(AppContext)
  return (
    <>
        <HStack  p={{base:25,md:50,}} gap='50px' margin='auto'>
            <Image src='https://files.myglamm.com/site-images/400x400/TVC-Collectionpage.jpg' alt='err'/>
            <VStack boxShadow='2xl'padding='20px' rounded='md' justify='flex-start' alignItems='flex-start' textAlign='left'>
                <Text   color='pink.500' alignSelf='center' fontWeight='700' fontSize='3xl'  as='u'>MyGlamm</Text>
    <Text  fontWeight='500'>Our Makeup, Face Care and Body Care collection, created for the beauty needs of <br /> over 20 Lakh women </Text>
            </VStack>
        </HStack>
        <Divider/>
        <HStack padding='10px 20px' justify='center'>

<Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)'  alignSelf='center' fontSize='2xl'  as='b'>PRODUCTS</Text>
</HStack>
<SimpleGrid padding='10px 20px' columns={4} spacing={10}>
{
  AllData.CollectionProducts.map((el)=>{
      return(
        <NavLink to={`/singleproductpage/${el.id}`}> <Box boxShadow='lg' padding='10px 20px'  >
              <Image width='100%' src={el.image} alt='err'/>
              <Text padding='5px 0px'   as='b'>{el.selection2}</Text>
              <Text color='grey' padding='5px 0px' >{el.selection3}</Text>
              <HStack>

<Text     fontWeight='500' fontSize='xl'  as='b' color='black' padding='25px 0px' >₹ {el.selection4}</Text>
<Text     fontWeight='500' fontSize='xl'  as='del' color='gray' padding='25px 0px' >{el.selection5}</Text>
</HStack>
          </Box>
          </NavLink>
      )
  })
}

</SimpleGrid>
    </>
  )
}

export default Collection
