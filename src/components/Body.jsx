import {
  Container,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Image,
  Flex,
  Divider,
  HStack,
  Center,
} from "@chakra-ui/react";

const HumidityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    name="humidity"
    data-testid="Icon"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="blue"
  >
    <title>Humidity</title>
    <path
      fillRule="evenodd"
      d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"
    ></path>
  </svg>
);

const WindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM"
    data-testid="Icon"
    viewBox="0 0 24 24"
    width="40"
    height="40"
  >
    <title>Wind</title>
    <path
      d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
      strokeWidth="2"
      stroke="#7f8c8d"
      strokeLinecap="round"
      fill="none"
    ></path>
  </svg>
);

const TempIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM"
    name="feels-like"
    data-testid="Icon"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="#e84118"
  >
    <title>Temperature</title>
    <path d="M9.94 15.406v.323c.974.358 1.671 1.325 1.671 2.461 0 1.441-1.122 2.61-2.505 2.61-1.384 0-2.506-1.169-2.506-2.61 0-1.136.697-2.103 1.67-2.461v-.323a2.088 2.088 0 0 1-1.252-1.914V5.488a2.088 2.088 0 1 1 4.176 0v8.004c0 .856-.516 1.592-1.253 1.914zM9.15 4.9a.75.75 0 0 0-.75.75v5.33h1.5V5.65a.75.75 0 0 0-.75-.75zM15.4 8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
  </svg>
);

const RainAmtIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM"
    name="precip-rain"
    data-testid="Icon"
    viewBox="0 0 1024 1024"
    width="25"
    height="25"
    fill="blue"
  >
    <title>Rain</title>
    <path d="M424.755 39.731c3.891-12.902-4.71-26.214-19.251-29.696-12.902-3.072-26.01 2.662-31.744 13.107L134.758 392.396c-4.915 6.963-8.806 14.541-11.469 22.938-13.107 43.418 15.77 88.064 64.512 99.533 48.128 11.469 97.485-13.722 111.206-56.32L424.754 39.731zm463.667-29.696c-14.336-3.482-29.082 3.072-35.226 14.541h-.205l-497.254 767.59c-8.806 12.288-15.77 26.01-20.275 40.96-23.347 77.414 28.262 156.877 115.098 177.766 86.221 20.48 174.899-24.576 198.861-101.171h.205l119.603-397.926c.205-.41.41-1.024.614-1.434L909.517 45.67l.614-2.253c3.891-14.541-5.53-29.491-21.709-33.382z"></path>
  </svg>
);

const CloudCoverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM"
    name="cloud"
    data-testid="Icon"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="#95a5a6"
  >
    <title>Cloud</title>
    <path d="M21.786 11.898a3.322 3.322 0 0 0-4.04-2.357l-.356.095a4.911 4.911 0 0 0-9.599.546l-.129-.034a2.804 2.804 0 0 0-3.486 3.032l-1.203.323a1.312 1.312 0 0 0 .42 2.576h15.103s.626-.029.94-.113a3.322 3.322 0 0 0 2.35-4.068"></path>
  </svg>
);

const UVIndexIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Icon--icon--2aW0V Icon--actionTheme--1kPn8 DetailsTable--icon--24dnM"
    name="uv"
    data-testid="Icon"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="#9b59b6"
  >
    <title>UV Level</title>
    <path d="M7.4 5.598a.784.784 0 0 1 .25-.92c.335-.256.824-.197 1.02.062.066.063.066.063.08.085l2.406 3.152-.626.238a3.983 3.983 0 0 0-1.097.633l-.522.424L7.4 5.598zm4.539 2.358c-.21 0-.418.017-.625.05l-.664.106.09-.666.438-3.266c.013-.072.013-.072.012-.057a.783.783 0 0 1 .666-.616.78.78 0 0 1 .872.639l.006.038.507 3.933-.662-.108a3.957 3.957 0 0 0-.64-.053zm-7.781 3.19l.026-.004 3.934-.507-.108.662a3.98 3.98 0 0 0-.003 1.266l.105.664-.665-.09-3.265-.439a.784.784 0 0 1-.676-.679c-.054-.42.238-.809.63-.869l.022-.004zm11.504-.617a3.98 3.98 0 0 0-.632-1.097l-.425-.522.623-.256 3.056-1.256a.787.787 0 0 1 .916.253c.256.337.199.817-.104 1.063l-.045.037-3.151 2.405-.238-.627zm-1.205-1.672a3.984 3.984 0 0 0-1.095-.637l-.626-.24.41-.532 2.008-2.602c.059-.07.059-.07.046-.052a.78.78 0 0 1 1.306.227c.076.185.079.39.02.54l-.021.06-1.528 3.662-.52-.426zM4.595 7.793c.162-.387.611-.58.971-.441.017.004.017.004.055.02L9.283 8.9l-.425.52a3.985 3.985 0 0 0-.636 1.094l-.24.627-3.144-2.425a.784.784 0 0 1-.243-.924zm14.443 7.367c.054.045.054.045.044.04a.784.784 0 0 1 .199.884c-.163.386-.61.58-.964.443-.024-.006-.024-.006-.062-.022l-3.662-1.529.426-.52a3.98 3.98 0 0 0 .636-1.094l.241-.626 3.142 2.424zm1.332-3.303c.053.422-.239.809-.63.87l-.035.006-3.945.508.108-.662a3.999 3.999 0 0 0 .003-1.266l-.105-.663.665.09 3.272.44c.068.012.068.012.052.01a.784.784 0 0 1 .615.667zm-3.894 6.421c.024.068.024.068.017.053a.786.786 0 0 1-.27.87c-.332.25-.816.194-1.047-.091-.022-.023-.022-.023-.05-.058l-2.406-3.154.626-.237a3.977 3.977 0 0 0 1.097-.632l.523-.425 1.51 3.674zm-8.26-4.932c.151.397.365.767.633 1.097l.424.522-.622.256-3.054 1.255a.787.787 0 0 1-.92-.25.781.781 0 0 1-.154-.58c.027-.199.127-.379.227-.452.045-.046.045-.046.075-.069l3.153-2.406.238.627zm3.723 2.572c.209 0 .417-.016.625-.049l.662-.103-.089.664-.438 3.26-.012.062a.785.785 0 0 1-.666.618c-.048.005-.048.005-.101.006-.386 0-.714-.28-.764-.612-.01-.043-.01-.043-.014-.072l-.507-3.934.662.108c.213.035.427.052.642.052zM7.366 18.27l.006-.015L8.9 14.592l.52.426a3.99 3.99 0 0 0 1.094.636l.626.241-.41.531-2.012 2.609-.04.046a.788.788 0 0 1-.886.2.787.787 0 0 1-.428-1.011z"></path>
    <path d="M11.911 14.322a2.411 2.411 0 1 0 0-4.822 2.411 2.411 0 0 0 0 4.822zm0 2a4.411 4.411 0 1 1 0-8.822 4.411 4.411 0 0 1 0 8.822z"></path>
  </svg>
);

const Body = () => {
  return (
    <Container border={1} maxW="960px" borderRadius={4} bg={"white"}>
      <Accordion defaultIndex={[0]} allowMultiple color={"black"}>
        <AccordionItem>
          <h2>
            <AccordionButton height={24}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                paddingRight={4}
                marginRight={4}
              >
                9:00 PM
              </Box>
              <Box as="span" flex="1" textAlign="left">
                50° F
              </Box>
              <Box as="span" flex="1" textAlign="left">
                <Flex justify={"center"} align={"center"}>
                  <Image
                    boxSize="70px"
                    src="https://openweathermap.org/img/wn/01d@4x.png"
                  />
                  Clear
                </Flex>
              </Box>
              <Box as="span" flex="1" textAlign="left">
                2%
              </Box>
              <Box as="span" flex="1" textAlign="left">
                <Flex justify={"center"} align={"center"}>
                  <Image
                    boxSize="70px"
                    src="https://openweathermap.org/img/wn/10d@4x.png"
                  />
                  NNE 5 mph
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            padding={4}
            border={"1px solid #7f8c8d"}
            borderRadius={4}
          >
            <HStack>
              <Box as="span" flex="1" textAlign={"center"}>
                <Flex align={"center"} justify={"center"}>
                  <TempIcon />
                  <Box>
                    <p>
                      <strong>Feels Like:</strong>
                    </p>
                    <p>50° F</p>
                  </Box>
                </Flex>
              </Box>
              <Center height="50px">
                <Divider orientation="vertical" />
              </Center>
              <Box as="span" flex="1">
                <Flex align={"center"} justify={"center"}>
                  <WindIcon />
                  <p>Wind:</p>
                  <p>NNE 5 mph</p>
                </Flex>
              </Box>
              <Center height="50px">
                <Divider orientation="vertical" />
              </Center>
              <Box as="span" flex="1">
                <Flex align={"center"} justify={"center"}>
                  <HumidityIcon />
                  <p>Humidity:</p>
                  <p>72%</p>
                </Flex>
              </Box>
            </HStack>
            <Divider margin={4} />
            <HStack>
              <Box as="span" flex="1">
                <Flex align={"center"} justify={"center"}>
                  <UVIndexIcon />
                  <Box>
                    {" "}
                    <p>
                      <strong>UV Index:</strong>
                    </p>
                    <p>0 of 11</p>
                  </Box>
                </Flex>
              </Box>
              <Box as="span" flex="1">
                <Flex align={"center"} justify={"center"}>
                  <CloudCoverIcon />
                  <p>Cloud Cover:</p>
                  <p>0%</p>
                </Flex>
              </Box>
              <Box as="span" flex="1">
                <Flex align={"center"} justify={"center"}>
                  <RainAmtIcon />
                  <p>Rain Amount:</p>
                  <p>0 in</p>
                </Flex>
              </Box>
            </HStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Body;
