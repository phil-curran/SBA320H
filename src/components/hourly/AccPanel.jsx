/* eslint-disable react/prop-types */
import { Box, AccordionPanel, Flex, Divider, HStack } from "@chakra-ui/react";

// utilities
import tempConverter from "../../utilities/tempConverter";

// layout
import VLineBreak from "../layout/Divider";

import HumidityIcon from "../../assets/HumidityIcon";
import WindIcon from "../../assets/WindIcon";
import TempIcon from "../../assets/TempIcon";
import RainAmtIcon from "../../assets/RainAmtIcon";
import CloudCoverIcon from "../../assets/CloudCoverIcon";
import UVIndexIcon from "../../assets/UVIndexIcon";

const AccPanel = ({ hour }) => {
  const { clouds, feels_like, humidity, pop, uvi, wind_deg, wind_speed } = hour;

  return (
    <AccordionPanel
      padding={4}
      border={"1px solid #7f8c8d"}
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderBottomRightRadius={8}
      borderBottomLeftRadius={8}
    >
      <HStack>
        <Box as="span" flex="1" textAlign={"center"}>
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <TempIcon />
            <Box>
              <p>
                <strong>Feels Like:</strong>
              </p>
              <p>{tempConverter(feels_like)}° F</p>
            </Box>
          </Flex>
        </Box>
        <VLineBreak />
        <Box as="span" flex="1">
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <WindIcon />
            <p>Wind:</p>
            <p>
              {wind_deg}° @ {wind_speed}
            </p>
          </Flex>
        </Box>
        <VLineBreak />
        <Box as="span" flex="1">
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <HumidityIcon />
            <p>Humidity:</p>
            <p>{humidity}%</p>
          </Flex>
        </Box>
      </HStack>
      <Divider margin={4} />
      <HStack>
        <Box as="span" flex="1">
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <UVIndexIcon />
            <Box>
              <p>
                <strong>UV Index:</strong>
              </p>
              <p>{uvi} of 11</p>
            </Box>
          </Flex>
        </Box>
        <VLineBreak />
        <Box as="span" flex="1">
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <CloudCoverIcon />
            <p>Cloud Cover:</p>
            <p>{clouds}%</p>
          </Flex>
        </Box>
        <VLineBreak />
        <Box as="span" flex="1">
          <Flex
            align={"center"}
            justify={"center"}
            justifyContent={"space-evenly"}
          >
            <RainAmtIcon />
            <p>Precipitation:</p>
            <p>{pop}%</p>
          </Flex>
        </Box>
      </HStack>
    </AccordionPanel>
  );
};

export default AccPanel;
