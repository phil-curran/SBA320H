import { useState } from "react";

import { Box, Flex, Button, InputGroup, Input } from "@chakra-ui/react";

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
      <Box width="960px" alignItems="center">
        <InputGroup size="md">
          <Input onChange={handleChange} placeholder="Search" />
          <Button size="md" ml={4} onClick={handleSubmit} colorScheme="green">
            Search
          </Button>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default Navbar;
