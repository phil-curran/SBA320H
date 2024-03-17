import { AccordionItem } from "@chakra-ui/react";

import AccBtn from "./AccBtn";
import AccPanel from "./AccPanel";

const AccItem = () => {
  return (
    <AccordionItem padding={1}>
      <h2>
        <AccBtn data={"data"} />
      </h2>
      <AccPanel />
    </AccordionItem>
  );
};

export default AccItem;
