import { Container, Accordion } from "@chakra-ui/react";

import AccItem from "./hourly/AccItem";

import { getWeatherData } from "../utils/getWeatherData";

const Body = () => {
  console.log(getWeatherData());
  return (
    <Container
      border={1}
      maxW="960px"
      borderRadius={6}
      bg={"white"}
      padding={1}
    >
      <Accordion defaultIndex={[0]} allowMultiple color={"black"}>
        <AccItem />
      </Accordion>
    </Container>
  );
};

export default Body;
