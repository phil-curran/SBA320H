import {
  Box,
  AccordionPanel,
  Flex,
  Divider,
  HStack,
  Center,
} from "@chakra-ui/react";

import HumidityIcon from "../../assets/HumidityIcon";
import WindIcon from "../../assets/WindIcon";
import TempIcon from "../../assets/TempIcon";
import RainAmtIcon from "../../assets/RainAmtIcon";
import CloudCoverIcon from "../../assets/CloudCoverIcon";
import UVIndexIcon from "../../assets/UVIndexIcon";

const AccPanel = () => {
  return (
    <AccordionPanel padding={4} border={"1px solid #7f8c8d"} borderRadius={4}>
      <HStack>
        <Box as="span" flex="1" textAlign={"center"}>
          <Flex align={"center"} justify={"center"}>
            <TempIcon />
            <Box>
              <p>
                <strong>Feels Like:</strong>
              </p>
              <p>50° F</p>
            </Box>
          </Flex>
        </Box>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Box as="span" flex="1">
          <Flex align={"center"} justify={"center"}>
            <WindIcon />
            <p>Wind:</p>
            <p>NNE 5 mph</p>
          </Flex>
        </Box>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Box as="span" flex="1">
          <Flex align={"center"} justify={"center"}>
            <HumidityIcon />
            <p>Humidity:</p>
            <p>72%</p>
          </Flex>
        </Box>
      </HStack>
      <Divider margin={4} />
      <HStack>
        <Box as="span" flex="1">
          <Flex align={"center"} justify={"center"}>
            <UVIndexIcon />
            <Box>
              {" "}
              <p>
                <strong>UV Index:</strong>
              </p>
              <p>0 of 11</p>
            </Box>
          </Flex>
        </Box>
        <Box as="span" flex="1">
          <Flex align={"center"} justify={"center"}>
            <CloudCoverIcon />
            <p>Cloud Cover:</p>
            <p>0%</p>
          </Flex>
        </Box>
        <Box as="span" flex="1">
          <Flex align={"center"} justify={"center"}>
            <RainAmtIcon />
            <p>Rain Amount:</p>
            <p>0 in</p>
          </Flex>
        </Box>
      </HStack>
    </AccordionPanel>
  );
};

export default AccPanel;
