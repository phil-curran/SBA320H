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
import Now from "./Now";
import Daily from "./Daily";

const TabNav = ({ weatherData }) => {
  return (
    <Container maxW="960px">
      <Tabs isFitted>
        <TabList>
          <Tab>Now</Tab>
          <Tab>Hourly</Tab>
          <Tab>10 Day</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Now now={weatherData.current} />
          </TabPanel>
          <TabPanel>
            <Hourly hours={weatherData.hourly} />
          </TabPanel>
          <TabPanel>
            <Daily days={weatherData.daily} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TabNav;
