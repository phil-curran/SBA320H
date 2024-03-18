import { useState } from "react";

import {
  Box,
  Flex,
  Button,
  InputGroup,
  Input,
  IconButton,
  Spacer,
} from "@chakra-ui/react";

import { SettingsIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: ", { search });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Flex
      align="center"
      justify="center"
      p={4}
      borderBottom="1px"
      borderColor="black"
    >
      <Spacer />
      <Box ml={12} width="960px" alignItems="center">
        <InputGroup size="md">
          <Input onChange={handleChange} placeholder="Search" />
          <Button size="md" ml={4} onClick={handleSubmit} colorScheme="green">
            Search
          </Button>
        </InputGroup>
      </Box>
      <Spacer />
      <IconButton
        backgroundColor={"#353b48"}
        aria-label="Search database"
        icon={<SettingsIcon color={"#f5f6fa"} _hover={{ color: "#2f3640" }} />}
      />
    </Flex>
  );
};

export default Navbar;
