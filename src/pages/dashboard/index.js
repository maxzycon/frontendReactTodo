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
  SimpleGrid,
  Icon,
  FormControl,
  Input,
} from "@chakra-ui/react";
import {
  FiHome,
  FiFileText,
  FiFilter,
  FiMoreVertical,
  FiPlus,
  FiGlobe,
  FiCheckCircle,
  FiFolder,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

function Dashboard() {
  return (
    <>
      <Flex>
        <Box
          className="sidebar"
          w={"18%"}
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
        <Box p={30} backgroundColor="gray.50" w={"82%"}>
          {/* menu container */}
          <Box>
            <FormControl className="myformgroup" position={"relative"}>
              <Input
                p={6}
                id="search"
                type="search"
                placeholder="I'm ssearching for..."
                pl={10}
              />
              <Icon
                color={"gray.500"}
                as={FiSearch}
                position={"absolute"}
                top={4}
                bottom={0}
                left={4}
              />
            </FormControl>
          </Box>
          {/* heading */}
          <Box my={5}>
            <Heading color={"gray.700"}>Dashboard</Heading>
            <Text color={"gray.500"}>See your overall team perfomance</Text>
          </Box>
          {/* card */}
          <SimpleGrid
            columns={{ lg: 4, sm: 1 }}
            justifyContent="center"
            alignItems={"center"}
            spacingX={5}
          >
            <Box
              bg={"card.todo"}
              color={"white"}
              w={"100%"}
              h={"100%"}
              rounded={"lg"}
              position={"relative"}
              overflow={"hidden"}
              shadow={"lg"}
            >
              <Box p={8}>
                <Heading fontSize={"5xl"}>12</Heading>
                <Text fontWeight={"bold"}>TOTAL TODO</Text>
              </Box>
              <Icon
                bottom={-5}
                right={-5}
                position={"absolute"}
                w={100}
                h={100}
                as={FiGlobe}
                color={"gray.200"}
              />
            </Box>
            <Box
              bg={"card.category"}
              color={"white"}
              w={"100%"}
              h={"100%"}
              rounded={"lg"}
              position={"relative"}
              overflow={"hidden"}
              shadow={"lg"}
            >
              <Box p={8}>
                <Heading fontSize={"5xl"}>12</Heading>
                <Text fontWeight={"bold"}>TOTAL CATEGORY</Text>
              </Box>
              <Icon
                bottom={-5}
                right={-5}
                position={"absolute"}
                w={100}
                h={100}
                as={FiFileText}
                color={"gray.200"}
              />
            </Box>
            <Box
              bg={"card.progress"}
              color={"white"}
              w={"100%"}
              h={"100%"}
              rounded={"lg"}
              position={"relative"}
              overflow={"hidden"}
              shadow={"lg"}
            >
              <Box p={8}>
                <Heading fontSize={"5xl"}>12</Heading>
                <Text fontWeight={"bold"}>TOTAL ON PROGRESS</Text>
              </Box>
              <Icon
                bottom={-5}
                right={-5}
                position={"absolute"}
                w={100}
                h={100}
                as={FiFolder}
                color={"gray.200"}
              />
            </Box>
            <Box
              bg={"card.complate"}
              color={"white"}
              w={"100%"}
              h={"100%"}
              rounded={"lg"}
              position={"relative"}
              overflow={"hidden"}
              shadow={"lg"}
            >
              <Box p={8}>
                <Heading fontSize={"5xl"}>12</Heading>
                <Text fontWeight={"bold"}>TOTAL COMPLETED</Text>
              </Box>
              <Icon
                bottom={-5}
                right={-5}
                position={"absolute"}
                w={100}
                h={100}
                as={FiCheckCircle}
                color={"gray.200"}
              />
            </Box>
          </SimpleGrid>
          {/* calendar */}
          <Box mt={10}>
            <Calendar
              localizer={localizer}
              // events={myEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Dashboard;
