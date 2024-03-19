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
  Card,
  CardBody,
  Text,
  Spacer,
  InputGroup,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        p={4}
        borderBottom="1px"
        borderColor="black"
      >
        <Spacer />
        <Link to={"/"}>
          {" "}
          <IconButton
            backgroundColor={"#353b48"}
            aria-label="Search database"
            icon={<CloseIcon color={"#f5f6fa"} _hover={{ color: "#2f3640" }} />}
          />
        </Link>
      </Flex>

      <Container>
        <Card mt={10} width={"600px"} height={"400px"}>
          <CardBody>
            <Center>
              <VStack>
                <Box margin={2}>
                  <Heading as="h2" size="lg">
                    Save Your API Key
                  </Heading>
                </Box>
                <Box margin={2}>
                  <Text>
                    Enter your api key in the field below to save it locally.
                  </Text>
                </Box>
                <Box margin={2} width={"500px"} alignItems="center">
                  <InputGroup size="md">
                    <Input placeholder="Your API Key Here!" />
                    <Button size="md" ml={4} colorScheme="green">
                      Save
                    </Button>
                  </InputGroup>
                </Box>
              </VStack>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Settings;
