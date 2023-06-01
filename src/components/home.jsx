import React from "react";
import { css } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./slider";
import ShoeCard from "../components/shoeCard";
import { Box, keyframes, Image, Flex, Text } from "@chakra-ui/react";
import Heading from "./heading";
import img1 from "../assets/asset1.jpg";
import img2 from "../assets/asset2.jpg";
import img3 from "../assets/asset3.jpg";

const Home = () => {
  const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
  const blinkingTextStyles = css`
    animation: ${blinkAnimation} 1s infinite;
  `;
  return (
    <div>
      <Heading />
      <Flex alignItems="center" justifyContent="center" padding={4}>
        <Box
          width="200px"
          height="400px"
          bgColor="red"
          marginRight="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          css={blinkingTextStyles}
        >
          <Text
            color="white"
            fontSize="xx-large"
            textAlign="center"
            // css={blinkingTextStyles}
          >
            <p>SALE</p>
            <br />
            <p>75%</p>
            <br />
            <p>OFF</p>
          </Text>
        </Box>

        <Box width="900px" height="500px" bgColor="lightgray">
          <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            <Image
              src="https://source.unsplash.com/random/900x500?shoes"
              h="100%"
              w="100%"
              objectFit="cover"
            />

            <Image
              src="https://source.unsplash.com/random/900x500?sport-shoes"
              h="100%"
              w="100%"
              objectFit="cover"
            />

            <Image
              src="https://source.unsplash.com/random/900x500?sneakers"
              h="100%"
              w="100%"
              objectFit="cover"
            />
          </Carousel>
        </Box>

        <Box
          width="200px"
          height="400px"
          bgColor="red"
          marginLeft="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          css={blinkingTextStyles}
        >
          <Text color="white" fontSize="xx-large" textAlign="center">
            <p>SALE</p>
            <br />
            <p>75%</p>
            <br />
            <p>OFF</p>
          </Text>
        </Box>
      </Flex>
      <hr />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Slider />
      </Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        padding={4}
        margin="4"
        gap="4"
      >
        <ShoeCard
          image={img1}
          name="NIKE"
          price=" ₹ 10000"
          desc="These stylish shoes are a perfect blend of comfort and fashion. Crafted with high-quality materials, they provide all-day support and cushioning, making them ideal for long walks or busy days. The sleek design and trendy colors add a touch of elegance to any outfit, while the durable construction ensures they withstand everyday wear. Step out in confidence and style with these must-have shoes"
        />
        <ShoeCard
          image={img2}
          name="PUMA"
          price=" ₹ 178000"
          desc="Designed for athletes and fitness enthusiasts, these performance shoes are engineered to enhance your performance and take your workouts to the next level. Featuring advanced technologies, such as responsive cushioning and breathable mesh uppers, they offer optimal comfort and support. Whether you're hitting the gym, going for a run, or participating in sports, these shoes provide the perfect combination of functionality and style."
        />
        <ShoeCard
          image={img3}
          name="BATA"
          price=" ₹ 30000"
          desc="Elevate your formal attire with these exquisite dress shoes. Handcrafted with precision and attention to detail, they exude sophistication and elegance. Made from premium leather, they boast a timeless design and impeccable craftsmanship. The cushioned insoles and leather linings ensure maximum comfort, while the sleek silhouette and refined finishes make a bold fashion statement. Complete your formal ensemble with these refined shoes."
        />
      </Flex>
    </div>
  );
};

export default Home;
