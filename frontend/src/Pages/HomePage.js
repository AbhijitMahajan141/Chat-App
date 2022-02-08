import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"#265077"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        // borderWidth={"1px"}
      >
        <Text
          fontSize="4xl"
          fontFamily="Quintessential"
          fontStyle={"italic"}
          color={"white"}
        >
          Chat-Up
        </Text>
      </Box>
      <Box
        bg={"#265077"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        // borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"} color={"white"}>
              Login
            </Tab>
            <Tab width={"50%"} color={"white"}>
              Sign up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
