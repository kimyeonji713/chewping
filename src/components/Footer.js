import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const bg = useColorModeValue("#f9f9f9", "#011627");
  const shadow = useColorModeValue("rgb(232, 234, 246) 0px 5px 5px 5px;");
  const pointColor = useColorModeValue("#423F3E", "#fff");
  const borderStyle = useColorModeValue("1px solid #423F3E", "1px solid #fff");

  return (
    <Box
      maxW="500px"
      w={"100%"}
      mx="auto"
      h={"70px"}
      borderTop={borderStyle}
      padding={"20px"}
      bgColor={bg}
    >
      <Text textAlign={"center"} color={pointColor}>
        &copy; KimYeonJI 2024
      </Text>
      <Text textAlign={"center"} color={pointColor}>
        <a href="https://github.com/kimyeonji713/chewping">
          https://github.com/kimyeonji713/chewping
        </a>
      </Text>
    </Box>
  );
};
