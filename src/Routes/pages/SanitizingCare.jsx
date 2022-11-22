import { Box, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
const SanitizingCare = () => {
    const {AllData} = useContext(AppContext)
  return (<>
  <HStack padding='10px 20px' justify='center'>

      <Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)' alignSelf='center' fontSize='2xl'  as='b'>SANITIZING CARE</Text>
  </HStack>
   <SimpleGrid padding='10px 20px' columns={4} spacing={10}>
     {
        AllData.SanitizingCare.map((el)=>{
            return(
                <NavLink to={`/singleproductpage/${el.id}`}><Box boxShadow='lg' padding='10px 20px'  >
                    <Image width='100%' src={el.image} alt='err'/>
                    <Text padding='5px 0px'   as='b'>{el.selection2}</Text>
                    <Text color='grey' padding='5px 0px' >{el.selection3}</Text>
                    <HStack>

<Text     fontWeight='500' fontSize='xl'  as='b' color='black' padding='25px 0px' > ₹ {el.selection4}</Text>
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

export default SanitizingCare
