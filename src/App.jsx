/* eslint-disable no-unused-vars */
import "./App.css";

import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

// componets
import DrawerExample from "./components/DrawerExample";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import TabNav from "./components/TabNav";

function App() {
  return (
    <div>
      <Navbar />
      <TabNav />
      <Body />
      {/* <IconButton aria-label="Search database" icon={<SettingsIcon />} /> */}
    </div>
  );
}

export default App;
