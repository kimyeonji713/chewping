import { AbsoluteCenter, Box, useColorModeValue } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
  const point = useColorModeValue("#178254", "#FFAD60");
  const bg = useColorModeValue("#fff", "#1a202c");

  return (
    <Box
      maxW={500}
      mx="auto"
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={bg}
    >
      <AbsoluteCenter p="1" axis="both">
        <PulseLoader color={point} />
      </AbsoluteCenter>
    </Box>
  );
};
