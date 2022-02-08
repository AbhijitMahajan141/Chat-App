import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user, handleFunction }) => {
  //const { user } = ChatState();
  return (
    <Box
      onClick={handleFunction}
      cursor={"pointer"}
      bg={"#0f4d92"}
      _hover={{
        background: "#73c2fb",
        color: "white",
      }}
      w={"100%"}
      d={"flex"}
      alignItems={"center"}
      color={"white"}
      px={3}
      py={2}
      mb={2}
      borderRadius={"lg"}
    >
      <Avatar
        mr={2}
        size={"sm"}
        cursor={"pointer"}
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize={"xs"}>
          <b>Email:</b> {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
