import { Box, Heading } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

export const Header = () => {
  return (
    <Box maxW="500px" w={"100%"} h={"80px"} mx="auto" padding={"10px"}>
      <Heading
        textAlign={"center"}
        fontSize={"25px"}
        fontWeight={"900"}
        fontFamily={""}
        letterSpacing={"2px"}
      >
        츄핑
      </Heading>
    </Box>
  );
};
