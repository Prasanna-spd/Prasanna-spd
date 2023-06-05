import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

// import React, { useState } from "react";
import img1 from "../assets/asset1.jpg";
import Heading from "./heading";
import { useContext, useState, useEffect } from "react";
import { FeatureContext } from "./contextmang";
import Modal from "../Modal";

function Features() {
  const [isOpen, setisOpen] = useState(false);
  const { selectedfeature } = useContext(FeatureContext);
  const [response, setResponse] = useState(null);

  const handleClick = async (featureName, brandName) => {
    await fetch("http://localhost:5000/api/mySelectedfeature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feature: featureName, brand: brandName }),
    })
      .then(async (res) => {
        const data = await res.json();
        setResponse(data);
        setisOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Heading />
      <header>{selectedfeature?.name}</header>
      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <HStack>
          <Image
            w={"600"}
            h={"600"}
            objectFit={"contain"}
            alt={"Exchange"}
            src={selectedfeature?.image}
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
              onClick={() => handleClick("warranty", selectedfeature?.name)}
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
              onClick={() => handleClick("durability", selectedfeature?.name)}
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
              onClick={() => handleClick("material", selectedfeature?.name)}
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
              onClick={() => handleClick("colors", selectedfeature?.name)}
            >
              Colors
            </Button>
          </VStack>
        </HStack>
        <div>
          <Modal open={isOpen} onClose={() => setisOpen(false)}>
            {{ title: selectedfeature.name, data: response }}
          </Modal>
        </div>
      </Box>
    </div>
  );
}

export default Features;
