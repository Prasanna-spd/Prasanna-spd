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

function ShoeCard(props) {
  const { setSelectedfeature } = useContext(FeatureContext);
  const handleViewClick = () => {
    setSelectedfeature(props);
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
          src={props.image}
        />
        <Heading>{props.name}</Heading>
        <Text noOfLines={1}>PRICE:{props.price}</Text>
        <Text noOfLines={5}>Description:{props.desc}</Text>

        <Button
          variant={"link"}
          backgroundColor="purple"
          onClick={handleViewClick}
        >
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
