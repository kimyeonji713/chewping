import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      maxW="500px"
      w={"100%"}
      mx="auto"
      h={"70px"}
      borderTop={"1px solid #423F3E"}
      padding={"20px"}
      bgColor={"#fff"}
      boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
    >
      <Text textAlign={"center"} color={"#423F3E"}>
        &copy; KimYeonJI 2024
      </Text>
      <Text textAlign={"center"} color={"#423F3E"}>
        <a href="https://github.com/kimyeonji713/chewping">
          https://github.com/kimyeonji713/chewping
        </a>
      </Text>
    </Box>
  );
};
