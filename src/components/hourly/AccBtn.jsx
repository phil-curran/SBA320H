/* eslint-disable react/prop-types */
import {
  Box,
  AccordionButton,
  AccordionIcon,
  Image,
  Flex,
} from "@chakra-ui/react";

const AccBtn = () => {
  return (
    <AccordionButton height={24} width={"100%"}>
      <Box as="span" flex="1" textAlign="left">
        9:00 PM
      </Box>
      <Box as="span" flex="1" textAlign="left">
        50° F
      </Box>
      <Box as="span" flex="1" textAlign="left">
        <Flex justify={"center"} align={"center"}>
          <Image
            boxSize="70px"
            src="https://openweathermap.org/img/wn/01d@4x.png"
          />
          Clear
        </Flex>
      </Box>
      <Box as="span" flex="1" textAlign="left">
        2%
      </Box>
      <Box as="span" flex="1" textAlign="left">
        <Flex justify={"center"} align={"center"}>
          <Image
            boxSize="70px"
            src="https://openweathermap.org/img/wn/10d@4x.png"
          />
          NNE 5 mph
        </Flex>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  );
};

export default AccBtn;
