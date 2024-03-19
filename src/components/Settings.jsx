import { useState } from "react";

import {
  Container,
  Flex,
  Center,
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
  const [formData, setFormData] = useState("");
  const [formValue, setFormValue] = useState(null);

  const handleFormData = (e) => {
    setFormData(e.target.value);
    console.log("form data: ", formData);
  };

  const handleSubmit = () => {
    localStorage.setItem("api_key", formData);
    setFormValue(localStorage.getItem("api_key"));
  };

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
                    <Input
                      onChange={handleFormData}
                      placeholder={!formValue ? "Enter API Key" : formValue}
                    />
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      ml={4}
                      colorScheme="green"
                    >
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
