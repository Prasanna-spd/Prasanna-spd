import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Text } from "@chakra-ui/react";

const carouselAnimation = keyframes`
  0% {
    transform: translateX(50%);
  }

  50% {
    transform: translateX(-50%);
  } 
  
 100% {
    transform: translateX(50%);
  } 
  
  
`;

const Slider = () => {
  const carouselStyles = {
    width: "100%",
    height: "40px",
    whiteSpace: "nowrap",
    backgroundColor: "lightseagreen",
    overflow: "hidden",
  };

  const itemStyles = {
    display: "inline-block",
    marginRight: "10px",
    animation: `${carouselAnimation} 5s linear infinite`,
  };

  return (
    <Box
      css={carouselStyles}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Box css={itemStyles}>
        <span>Sale!</span>
      </Box> */}
      <Box css={itemStyles}>
        <Text fontSize="large" fontWeight="bold" color="white">
          <span>SALE ! Grab your best deals</span>
        </Text>
      </Box>
    </Box>
  );
};

export default Slider;
