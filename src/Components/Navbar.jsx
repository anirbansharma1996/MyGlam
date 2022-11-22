import { Badge, Button, Divider, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Spacer, Text, useDisclosure, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AddIcon, ArrowRightIcon, MinusIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg';
import {BsBag  } from 'react-icons/bs';
import {SiHomeassistantcommunitystore  } from 'react-icons/si';
import AppContext from '../context/Appcontext';
import SearchBar from '../Routes/pages/SearchBar';
import { FaUserAlt } from "react-icons/fa";
import {   Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Box,
  } from '@chakra-ui/react'
import Scrollbars from 'react-custom-scrollbars-2';
const Navbar = () => {
  
  const{   handleRemove,
    handleChnage,
   
    setCartData,
    cartData,
    handleCart,
    TotalPrice }=useContext(AppContext)
const { isOpen, onOpen, onClose } = useDisclosure()
const toast = useToast()
  const{  isAuth,
    userName,
    LogOutUser, quantity }=useContext(AppContext)
  const Navigate=useNavigate()
  
  
    const links = [
        { path: "/", title: "HOME" },
        { path: "/makeup", title: "MAKEUP" },
        { path: "/haircare", title: "HAIRCARE" },
        { path: "/skincare", title: "SKINCARE" },
        { path: "/sanitizingcare", title: "SANITIZING CARE" },
        { path: "/collection", title: "COLLECTION" },
        { path: "/rewards", title: "REWARDS" },
        { path: "/myglamstudio", title: "MYGLAM STUDIO" },
        { path: "/offers", title: "OFFERS" },
      ];
        /// LOGOUT

  const LogOut_User = () =>{



    console.log("LOGOUT IS RUNNUNG")

    toast({

      title: 'LOGOUT User Successfull.',

   

      // description: "created by suFi.",

      status: 'warning',

      duration: 3000,

      isClosable: true,

    })



    LogOutUser()

  }
  return (
    <>
    <HStack padding='10px 30px' bgColor='#fee8e8'>
        <Text onClick={()=> Navigate('/haircare')}  marginRight='20px'  fontSize='xs' fontWeight="500">Pick any product ar Rs 199</Text>
        <Text onClick={()=>Navigate('/collection')} as='b' color='#D53F8C' fontSize='xs' fontWeight="500">SHOP NOW</Text>
        <Spacer/>
        <Text><SiHomeassistantcommunitystore/></Text>
        <Text onClick={()=>Navigate('/collection')} fontSize='xs' fontWeight="500">  My Glamm Store</Text>
    </HStack>

   <HStack padding='8px 30px' margin='auto'>
   <Image onClick={()=>Navigate('/')}  marginRight='20px' w='150px'   src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg'/>
   <InputGroup display={{base:"none", md:"none", lg:"block"}} >
    <InputLeftElement
      pointerEvents='none'
      // children={<SearchIcon color='gray.300' />}
    />
    <SearchBar/>
    {/* <Input  variant='filled' placeholder='Find Lipstick,EyeLiner,Makeup,Tutorial,etc' width='50%'/> */}
  </InputGroup>
    <Spacer/>
    <HStack>

    

    <BsBag fontSize='20px' onClick={onOpen}/> <Text borderRadius='full' color='white' p={1} bgColor='black'>{quantity}</Text>
    
    <Text><CgProfile fontSize='20px' onClick={()=>Navigate('/login')}/></Text>
  
 
  {isAuth ? <>
    <Text>{userName}</Text>
    <Button onClick={()=>LogOut_User()}>LOGOUT</Button>
  </>
  : <>
  <NavLink to="/login"><Button colorScheme='facebook' >Login</Button></NavLink>
  </>

  }
  


 


    </HStack>
  </HStack>
    <Wrap    spacing={5} alignSelf='center' justify='center' margin='auto'
  >
  
    {links.map((link) => (
      <WrapItem >
      <NavLink 
     
        // style={({ isActive }) => {
        //   return isActive ? activeStyle : defaultStyle;
        // }}
        // className={({ isActive }) => {
        //   return isActive ? styles.active : styles.default;
        // }}
        key={link.path}
        to={link.path}
        end
      > 
       <Text  fontSize={{base:"10px", md:"20px", lg:"15px"}}
      style={{fontWeight:500,padding:"10px 0px"}}> {link.title}</Text>
      </NavLink></WrapItem>
    ))}
  </Wrap>
  <Divider/>


  <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Flex pt={2} gap='10px'><BsBag/> My Bag  ({quantity})  </Flex></DrawerHeader>
           <Scrollbars>
          <DrawerBody>
           <SimpleGrid>
              {
                cartData.map((el)=>{
                    return(
                        <Box marginBottom={2} borderRadius='lg' p={1} border='1px solid #a0b2cd' >
                        <Flex gap='5px'>

                            <Image w='80px' src={el.image}/>
                            <Text  fontSize='sm' fontWeight='500'>{el.selection2}</Text>
                        </Flex>
                          <Flex justify='space-evenly'>
                          <Text p={2}  fontSize='sm' fontWeight='500'>₹ {el.selection4}</Text>
                          <Text p={1}  fontSize='md' fontWeight='500'>Qty</Text>
                          <Button onClick={() => handleChnage(el, -1)} size="sm" borderRadius="full"><MinusIcon/></Button>
                          <Badge p={2}  colorScheme='red' textAlign='center'>{el.qty}</Badge>
                          <Button onClick={() => handleChnage(el, 1)}  size="sm" borderRadius="full"><AddIcon/></Button>
                          
                          </Flex>
                          <Button  onClick={() => handleRemove(el.id)} colorScheme='red' size='xs'>Remove Product</Button>
                         
                        </Box>
                    )
                })
              }
           </SimpleGrid>
           

          </DrawerBody>
          </Scrollbars>
          <DrawerFooter  bgColor='white'  >
        <HStack >
            <VStack marginRight={3} ><Text fontSize='xs' > Congrats! You're eligible for free gift
Please select. </Text> </VStack>
            <VStack  ><Text fontWeight='500' fontSize='sm' > TotalAmount ₹   {TotalPrice} </Text> </VStack>
            
        </HStack>
         </DrawerFooter>
          <DrawerFooter  bgColor='#1a202c'  >
           
          <NavLink to='/payementform'>  <Flex gap='80px' >
                <Text  color='white' fontWeight='500'>
                Proceed To Checkout
                </Text>
                <ArrowRightIcon mt={1} color='white'/>
               
            </Flex>
            </NavLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    </>
  )
}

export default Navbar
