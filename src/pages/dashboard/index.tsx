import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Avatar,
} from "@chakra-ui/react";
import {
  FiHome,
  FiFileText,
  FiFilter,
  FiMoreVertical,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Flex>
        <Box
          className="sidebar"
          w={"20%"}
          h={"100vh"}
          px={50}
          py={10}
          position={"relative"}
        >
          <Flex direction={"column"} justify={"space-between"} h={"100%"}>
            <List spacing={5} overflowY={"auto"}>
              <ListItem fontSize={"lg"} fontWeight={"bold"} color="gray.600">
                <Box
                  _after={{
                    content: '""',
                    border: "2px",
                    borderColor: "login.800",
                    position: "absolute",
                    height: "30px",
                    right: 0,
                  }}
                >
                  <Link to={"/dashboard"}>
                    <ListIcon w={5} h={5} as={FiHome} mr="5" />
                    Home
                  </Link>
                </Box>
              </ListItem>
              <ListItem fontSize={"lg"} fontWeight={"bold"} color="gray.500">
                <Box>
                  <Link to={"/"}>
                    <ListIcon w={5} h={5} as={FiFileText} mr="5" />
                    Todo
                  </Link>
                </Box>
              </ListItem>
              <ListItem fontSize={"lg"} fontWeight={"bold"} color="gray.500">
                <Box>
                  <Link to={"/"}>
                    <ListIcon w={5} h={5} as={FiFilter} mr="5" />
                    Category
                  </Link>
                </Box>
              </ListItem>

              {/* category */}
              <ListItem fontSize={"lg"} fontWeight={"bold"} color="gray.500">
                <Flex alignItems={"center"} justify="space-between">
                  <Link to={"/"}>
                    <Box as="span" w={5} h={5} mr={5}>
                      🤘
                    </Box>
                    Babi
                  </Link>
                  <Flex justify={"space-between"} alignItems={"center"}>
                    <ListIcon w={5} h={5} as={FiMoreVertical} m={0} p={0} />
                    <Box
                      backgroundColor={"gray.100"}
                      w={10}
                      rounded={10}
                      ml={3}
                      textAlign={"center"}
                    >
                      <Text>5</Text>
                    </Box>
                  </Flex>
                </Flex>
              </ListItem>

              {/* add category */}
              <ListItem fontSize={"lg"} fontWeight={"bold"} color="gray.500">
                <Button
                  display={"block"}
                  w={"100%"}
                  border={"1px"}
                  borderStyle={"dotted"}
                  textAlign={"center"}
                  p={2}
                >
                  <ListIcon w={5} h={5} as={FiPlus} />
                  category
                </Button>
              </ListItem>
            </List>

            <Box>
              <Flex align={"center"} experimental_spaceX={3}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box>
                  <Heading size={"sm"}>Oskar Maha Kasi</Heading>
                  <Text>user</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box p={30} backgroundColor="gray.50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          asperiores consequatur commodi ut minima quis quas modi unde maiores
          error reiciendis voluptatibus perspiciatis rem, culpa hic deleniti in.
          Obcaecati, mollitia!
        </Box>
      </Flex>
    </>
  );
}

export default Dashboard;
