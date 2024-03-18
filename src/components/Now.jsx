/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Center,
  Image,
  VStack,
  Box,
  Heading,
} from "@chakra-ui/react";

import timeConverter from "../utilities/timeConverter.js";
import tempConverter from "../utilities/tempConverter.js";

// icons
import MoonSetIcon from "../assets/MoonSetIcon";
import SunriseIcon from "../assets/SunriseIcon";
import SunsetIcon from "../assets/SunsetIcon";
import TempIcon from "../assets/TempIcon";
import HumidityIcon from "../assets/HumidityIcon.jsx";
import UVIndexIcon from "../assets/UVIndexIcon.jsx";
import VisibilityIcon from "../assets/VisibilityIcon.jsx";
import WindIcon from "../assets/WindIcon.jsx";
import CompassIcon from "../assets/CompassIcon.jsx";

const Now = ({ now }) => {
  const {
    clouds,
    dew_point,
    dt,
    feels_like,
    humidity,
    pressure,
    temp,
    uvi,
    visibility,
    weather,
    wind_deg,
    wind_speed,
  } = now;
  let time = timeConverter(dt);
  const { date, day, hour, minutes, month, phase, seconds, year } = time;
  let sunrise = timeConverter(now.sunrise);
  let sunset = timeConverter(now.sunset);

  return (
    <Container
      border={1}
      maxW="960px"
      borderRadius={6}
      bg={"white"}
      color={"black"}
      padding={2}
    >
      <Grid
        h="400px"
        templateRows="repeat(4, 1fr)"
        templateColumns="1fr 1fr 1fr"
        gap={4}
        margin={2}
      >
        <GridItem
          colStart={1}
          colEnd={2}
          rowStart={1}
          rowEnd={3}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
          padding={4}
        >
          <Center>
            <VStack>
              <Box>
                <Heading as="h2" size="lg">
                  {weather[0].main}
                </Heading>
              </Box>
              <Box>
                {" "}
                <Image
                  height={100}
                  mt={0}
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                />
              </Box>
            </VStack>
          </Center>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={2}
          rowStart={3}
          rowEnd={5}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Center>
            <VStack>
              <Box>
                {" "}
                <Heading as="h2" size="lg">
                  Temperature:
                </Heading>
              </Box>
              <Box>
                <TempIcon />
              </Box>
              <Box>
                <p>{tempConverter(feels_like)}° F</p>
              </Box>
            </VStack>
          </Center>
        </GridItem>

        <GridItem
          colStart={2}
          colEnd={3}
          rowStart={1}
          rowEnd={2}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Grid
            templateRows="1fr 1fr"
            templateColumns="1fr 2fr"
            justifyContent={"center"}
            alignContent={"center"}
          >
            <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={3}>
              <Flex
                justifyContent={"center"}
                alignContent={"center"}
                paddingTop={1}
              >
                <SunriseIcon />
              </Flex>
            </GridItem>
            <GridItem
              colStart={2}
              colEnd={3}
              rowStart={1}
              rowEnd={2}
              justifyContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
              alignContent={"center"}
            >
              <Flex>
                <strong>Sunrise:</strong>
              </Flex>
            </GridItem>
            <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
              {sunrise.hour}:{sunrise.minutes} {sunrise.phase}
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          colStart={3}
          colEnd={4}
          rowStart={1}
          rowEnd={2}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Grid
            templateRows="1fr 1fr"
            templateColumns="1fr 2fr"
            justifyContent={"center"}
            alignContent={"center"}
          >
            <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={3}>
              <Flex justifyContent={"center"} alignContent={"center"}>
                <SunsetIcon />
              </Flex>
            </GridItem>
            <GridItem
              colStart={2}
              colEnd={3}
              rowStart={1}
              rowEnd={2}
              justifyContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
              alignContent={"center"}
            >
              <Flex>
                <strong>Sunset:</strong>
              </Flex>
            </GridItem>
            <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
              {sunset.hour}:{sunset.minutes} {sunset.phase}
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          colStart={2}
          colEnd={3}
          rowStart={2}
          rowEnd={3}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          rowStart={2}
          rowEnd={3}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Box as="span" flex="1">
            <Flex
              align={"center"}
              justify={"center"}
              justifyContent={"space-evenly"}
            >
              <HumidityIcon />
              <p>Dew Point:</p>
              <p>{tempConverter(dew_point)}%</p>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={3}
          rowStart={3}
          rowEnd={4}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          rowStart={3}
          rowEnd={4}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Box as="span" flex="1">
            <Flex
              align={"center"}
              justify={"center"}
              justifyContent={"space-evenly"}
            >
              <VisibilityIcon />
              <Box>
                <p>
                  <strong>Visibility:</strong>
                </p>
                <p>{visibility}</p>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={3}
          rowStart={4}
          rowEnd={5}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Box as="span" flex="1">
            <Flex
              align={"center"}
              justify={"center"}
              justifyContent={"space-evenly"}
            >
              <WindIcon />
              <Box>
                <p>
                  <strong>Wind Speed:</strong>
                </p>
                <p>{wind_speed}</p>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          rowStart={4}
          rowEnd={5}
          backgroundColor={"#ecf0f1"}
          borderRadius={6}
          border={"1px solid #bdc3c7"}
        >
          <Box as="span" flex="1">
            <Flex
              align={"center"}
              justify={"center"}
              justifyContent={"space-evenly"}
            >
              <CompassIcon rotation={wind_deg} />
              <Box>
                <p>
                  <strong>Wind Direction:</strong>
                </p>
                <p>{wind_deg}°</p>
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Now;
