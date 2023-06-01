import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
// import React, { useState } from "react";
import img1 from "../assets/asset1.jpg";
import Heading from "./heading";
import { useContext } from "react";
import { FeatureContext } from "./contextmang";

function Features() {
  //   const [feature, setFeature] = useState("second");
  const { selectedfeature } = useContext(FeatureContext);
  return (
    <div>
      <Heading />
      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <HStack>
          <Image
            w={"600"}
            h={"600"}
            objectFit={"contain"}
            alt={"Exchange"}
            src={selectedfeature && selectedfeature.image}
            my={5}
            p={16}
            me={20}
          />
          <VStack spacing={4}>
            <Button
              width={200}
              borderRadius={"lg"}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Warranty
            </Button>
            <Button
              width={200}
              borderRadius={"lg"}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Durability
            </Button>
            <Button
              width={200}
              borderRadius={"lg"}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Material
            </Button>
            <Button
              width={200}
              borderRadius={"lg"}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Battery Life
            </Button>
            <Button
              width={200}
              borderRadius={"lg"}
              transition={"all 0.3s"}
              css={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Colors
            </Button>
          </VStack>
        </HStack>
      </Box>
    </div>
  );
}

export default Features;
