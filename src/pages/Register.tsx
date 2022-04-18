import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  SimpleGrid,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import LoginCaroursel from "../components/LoginCaroursel";

function Register() {
  return (
    <>
      <Box>
        <SimpleGrid
          columns={{ lg: 2, sm: 1 }}
          justifyContent="center"
          alignItems={"center"}
        >
          <Box h={"100vh"} position={"relative"} overflow="hidden">
            <Flex
              direction={"column"}
              justify={"center"}
              alignItems="center"
              bg={"login.700"}
              h="100vh"
            >
              <LoginCaroursel />
            </Flex>
            <Box position={"absolute"} top={0} left={-550} zIndex={0}>
              <img src="blob1.svg" alt="" width={800} height={"100%"} />
            </Box>
            <Box position={"absolute"} bottom={-10} right={-20} zIndex={0}>
              <img src="blob2.svg" alt="" width={800} height={"100%"} />
            </Box>
            <Box position={"absolute"} bottom={-10} left={0} zIndex={0}>
              <img src="blob3.svg" alt="" width={800} height={"100%"} />
            </Box>
            <Box position={"absolute"} top={-10} right={-150} zIndex={0}>
              <img src="blob4.svg" alt="" width={800} height={"100%"} />
            </Box>
          </Box>
          <Box>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justify={"center"}
              h={"100vh"}
              position={"relative"}
            >
              <Box px={64}>
                <Flex direction={"column"} justify="center" align={"center"}>
                  <Image src="logo512.png" w={50} h={50} />
                  <Heading
                    textAlign={"center"}
                    fontWeight="bold"
                    mt={5}
                    color="gray.700"
                  >
                    Start new session
                  </Heading>
                  <Text textAlign={"center"} my={5} color="gray.400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi aliquam rerum illo minima blanditiis veritatis repellat
                    fugit. adwadadokwa
                  </Text>
                </Flex>
                <Flex direction={"column"} experimental_spaceY={3}>
                  <form className="myform" action="">
                    <FormControl className="myformgroup">
                      <FormLabel color={"gray.600"} htmlFor="email">
                        Email
                      </FormLabel>
                      <Input id="email" type="email" placeholder="Email" />
                    </FormControl>
                    <FormControl className="myformgroup" mt={3}>
                      <FormLabel color={"gray.600"} htmlFor="password">
                        Password
                      </FormLabel>
                      <Input
                        id="password"
                        type="password"
                        autoComplete="password"
                        placeholder="Password"
                      />
                    </FormControl>
                  </form>
                  <Box pt="5">
                    <Button
                      bg={"login.700"}
                      color={"white"}
                      w={"100%"}
                      p="6"
                      _hover={{ backgroundColor: "login.800" }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Flex>
              </Box>
              <Box position={"absolute"} bottom={20}>
                <Text as={"span"} color="gray.400">
                  You have an account ?{" "}
                </Text>
                <Link to="/login">
                  <Text fontWeight={"bold"} as={"span"} color={"login.700"}>
                    Sign In
                  </Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Register;
