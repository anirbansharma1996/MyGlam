import { HStack, Image, Stack } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const Autoplay = () => {
   
  return (
  

    <Stack w='full'>
    
    <Slider {...settings}>
      <HStack width='100%'>
     <Image w='100%'  src="https://files.myglamm.com/site-images/original/1920x527sk.jpg" alt="" />
      </HStack>
      <HStack>
     <Image src="https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_2.jpg" alt="" />
      </HStack>
    </Slider>
  </Stack>
  )
}

export default Autoplay
