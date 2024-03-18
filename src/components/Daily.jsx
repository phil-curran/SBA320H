/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Grid,
  GridItem,
  Box,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";

import Divider from "./layout/Divider";
import timeConverter from "../utilities/timeConverter";
import tempConverter from "../utilities/tempConverter";

const Daily = ({ days }) => {
  let today = days[0];

  const {
    clouds,
    dew_point,
    dt,
    feels_like,
    humidity,
    moon_phase,
    moonrise,
    moonset,
    pop,
    pressure,
    summary,
    sunrise,
    sunset,
    temp,
    uvi,
    weather,
    wind_deg,
    wind_gust,
    wind_speed,
  } = today;

  const formattedDate = (time) => {
    let temp = timeConverter(time);
    const { date, dayName, month, year } = temp;
    return `${dayName} ${month}/${date}/${year}`;
  };

  return (
    <Container
      border={1}
      maxW="960px"
      borderRadius={6}
      bg={"white"}
      color={"black"}
      padding={2}
    >
      <Accordion>
        <AccordionItem>
          <AccordionButton
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
            height={24}
          >
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h2" size="md">
                {formattedDate(dt)}
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <SimpleGrid columns={2} spacing={2}>
              <Box border={"1px solid #dcdde1"} borderRadius={6} padding={4}>
                <Center mt={4}>
                  <Heading as="h3" size="sm">
                    Day
                  </Heading>
                </Center>
                <p>Cloud cover: {clouds}</p>
                <p>Dew Point: {tempConverter(dew_point)}°F</p>
                <p>Feels like: {tempConverter(feels_like.day)}°F</p>
                <p>Humidity: {humidity}</p>
                <p>Moon Phase: {moon_phase}</p>
                <p>Atmospheric Pressure: {pressure}</p>
                <p>Summary: {summary}</p>
                <p>UV Index: {uvi} of 11</p>
                <p>Wind Direction: {wind_deg}</p>
                <p>Wind Speed: {wind_speed} mph</p>
              </Box>
              <Box border={"1px solid #dcdde1"} borderRadius={6} padding={4}>
                <Center mt={4}>
                  <Heading as="h3" size="sm">
                    Night
                  </Heading>
                </Center>
                <p>Cloud cover: {clouds}</p>
                <p>Dew Point: {tempConverter(dew_point)}°F</p>
                <p>Feels like: {tempConverter(feels_like.night)}°F</p>
                <p>Humidity: {humidity}</p>
                <p>Moon Phase: {moon_phase}</p>
                <p>Atmospheric Pressure: {pressure}</p>
                <p>Summary: {summary}</p>
                <p>UV Index: {uvi} of 11</p>
                <p>Wind Direction: {wind_deg}</p>
                <p>Wind Speed: {wind_speed} mph</p>
              </Box>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Daily;
