/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  AccordionButton,
  AccordionIcon,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";

// utilities
import timeConverter from "../../utilities/timeConverter";
import tempConverter from "../../utilities/tempConverter";

// layout
import VLineBreak from "../layout/Divider";

// imgs
import WindIcon from "../../assets/WindIcon";

const AccBtn = ({ hour }) => {
  const {
    clouds,
    dew_point,
    dt,
    feels_like,
    humidity,
    pop,
    pressure,
    temp,
    weather,
    uvi,
    visibility,
    wind_deg,
    wind_gust,
    wind_speed,
  } = hour;

  let time = timeConverter(dt);
  const { minutes, phase } = time;

  return (
    <AccordionButton
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      height={24}
      _expanded={{ bg: "#404857", color: "white" }}
    >
      <Box as="span" flex="1" textAlign="center" width={"25%"}>
        {`${time.hour}:${minutes} ${phase}`}
      </Box>
      <VLineBreak />
      <Box as="span" flex="1" textAlign="center" width={"25%"}>
        <strong>{tempConverter(temp)}° F</strong>
      </Box>
      <VLineBreak />
      <Box as="span" flex="1" textAlign="center" width={"25%"}>
        <Flex
          justify={"center"}
          align={"center"}
          justifyContent={"space-evenly"}
        >
          <Image
            boxSize="70px"
            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`}
          />
          <strong>{hour.weather[0].main}</strong>
        </Flex>
      </Box>
      <VLineBreak />
      <Box as="span" flex="1" textAlign="center" width={"25%"}>
        <Flex
          justify={"center"}
          align={"center"}
          justifyContent={"space-evenly"}
        >
          <WindIcon />
          {wind_deg}° @ {wind_speed} mph
        </Flex>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  );
};

export default AccBtn;
