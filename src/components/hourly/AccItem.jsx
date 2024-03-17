/* eslint-disable react/prop-types */
import { AccordionItem } from "@chakra-ui/react";

import AccBtn from "./AccBtn";
import AccPanel from "./AccPanel";

const AccItem = ({ hour }) => {
  return (
    <AccordionItem padding={1}>
      <h2>
        <AccBtn hour={hour} />
      </h2>
      <AccPanel hour={hour} />
    </AccordionItem>
  );
};

export default AccItem;
