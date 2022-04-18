import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "../css/slideshow.css";

const slideImages = [
  "/assets/login/login-1.png",
  "/assets/login/login-2.png",
  "/assets/login/login-3.png",
];

function LoginCaroursel() {
  return (
    <Flex w="70%" h={"100vh"} direction={"column"} justifyContent="center">
      <Slide easing="ease" autoplay={true} arrows={false} indicators={true}>
        <Box className="each-slide" textAlign={"center"} cursor="pointer">
          <Flex justify={"center"} alignItems={"center"} direction="column">
            <img
              src={slideImages[0]}
              alt=""
              width={"70%"}
              onDragStart={(e) => e.preventDefault()}
            />
            <Box px={150} textAlign={"center"} mt={10} color="white">
              <Heading fontSize={"3xl"}>
                Change The Quality Of Your Life
              </Heading>
              <Text mt="3">
                A balance of working and todo make your life easier fill your
                life with enjoy
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="each-slide" textAlign={"center"} cursor="pointer">
          <Flex justify={"center"} alignItems={"center"} direction="column">
            <img
              src={slideImages[1]}
              alt=""
              width={"70%"}
              onDragStart={(e) => e.preventDefault()}
            />
            <Box px={150} textAlign={"center"} mt={10} color="white">
              <Heading fontSize={"3xl"}>
                Change The Quality Of Your Life
              </Heading>
              <Text mt="3">
                A balance of working and todo make your life easier fill your
                life with enjoy
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="each-slide" textAlign={"center"} cursor="pointer">
          <Flex justify={"center"} alignItems={"center"} direction="column">
            <img
              src={slideImages[2]}
              alt=""
              width={"70%"}
              onDragStart={(e) => e.preventDefault()}
            />
            <Box px={150} textAlign={"center"} mt={10} color="white">
              <Heading fontSize={"3xl"}>
                Change The Quality Of Your Life
              </Heading>
              <Text mt="3">
                A balance of working and todo make your life easier fill your
                life with enjoy
              </Text>
            </Box>
          </Flex>
        </Box>
      </Slide>
    </Flex>
  );
}

export default LoginCaroursel;
