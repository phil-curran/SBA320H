/* eslint-disable react/prop-types */
import { Container, Accordion, Flex, Box } from "@chakra-ui/react";

import AccItem from "./hourly/AccItem";
import VLineBreak from "./layout/Divider";

const Hourly = ({ hours }) => {
  return (
    <Container
      border={1}
      maxW="960px"
      borderRadius={6}
      bg={"white"}
      padding={1}
    >
      <Flex
        justify={"center"}
        align={"center"}
        padding={2}
        color={"white"}
        backgroundColor={"#2f3640"}
      >
        <Box as="span" flex="1" textAlign="center">
          Time
        </Box>
        <VLineBreak />
        <Box as="span" flex="1" textAlign="center">
          Temp
        </Box>
        <VLineBreak />
        <Box as="span" flex="1" textAlign="center">
          Weather
        </Box>
        <VLineBreak />
        <Box as="span" flex="1" textAlign="center">
          Wind
        </Box>
      </Flex>
      <Accordion defaultIndex={[0]} allowToggle color={"black"}>
        {hours.map((hour, index) => (
          <AccItem key={index} hour={hour} />
        ))}
      </Accordion>
    </Container>
  );
};

export default Hourly;
