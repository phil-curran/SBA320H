/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import Hourly from "./Hourly";

const TabNav = ({ weatherData }) => {
  return (
    <Container maxW="960px">
      <Tabs isFitted>
        <TabList>
          <Tab color={"#fff"}>Now</Tab>
          <Tab>Today</Tab>
          <Tab color={"#1abc9c"}>Hourly</Tab>
          <Tab>10 Day</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <Hourly hours={weatherData.hourly} />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TabNav;
