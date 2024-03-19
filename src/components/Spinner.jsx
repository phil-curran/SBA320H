import { Box, Flex, Spinner } from "@chakra-ui/react";

const SpinPanel = () => {
  return (
    <Box height={"416px"} width={"880px"}>
      <Flex align="center" justify="center" h="100%">
        <Spinner size={"xl"} />
      </Flex>
    </Box>
  );
};

export default SpinPanel;
