import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const TabNav = () => {
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
            <p>two!</p>
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
