import { Box, Button, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <>
      <VStack margin="auto" marginBottom={'3rem'}>
        <Box >
          <Image
           margin={'auto'}
            width="60%"
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </Box>

        <Button
          width="50%"
          style={{ marginTop: "0px" }}
          onClick={() => navigate("/")}
          fontSize="x"
          padding={3}
          w="50%"
          colorScheme="yellow"
        >
          {" "}
          CONTINUE SHOPPING{" "}
        </Button>
      </VStack>
    </>
  );
};

export default OrderSuccessfull;
