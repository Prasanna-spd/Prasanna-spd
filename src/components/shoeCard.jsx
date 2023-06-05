import React, { useContext } from "react";
import {
  VStack,
  Image,
  Heading,
  Text,
  Button,
  Collapse,
} from "@chakra-ui/react";
import img1 from "../assets/asset1.jpg";
import { Link } from "react-router-dom";
import { FeatureContext } from "./contextmang";

function ShoeCard({ image, name, price, desc }) {
  const { setSelectedfeature } = useContext(FeatureContext);

  const handleClick = () => {
    setSelectedfeature({ name: name, image: image });
  };

  return (
    <div>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          w={"300"}
          h={"300"}
          objectFit={"contain"}
          alt={"Exchange"}
          src={image}
        />
        <Heading>{name}</Heading>
        <Text noOfLines={1}>PRICE:{price}</Text>
        <Text noOfLines={5}>Description:{desc}</Text>

        <Button variant={"link"} backgroundColor="purple" onClick={handleClick}>
          <Link to="/feature">View</Link>
        </Button>
        <Button variant={"link"} backgroundColor="blue">
          <Link to="/login">BUY</Link>
        </Button>
      </VStack>
    </div>
  );
}

export default ShoeCard;
