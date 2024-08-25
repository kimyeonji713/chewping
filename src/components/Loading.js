import { AbsoluteCenter, Box, useColorModeValue } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
  const point = useColorModeValue("#178254", "#FFAD60");
  return (
    <Box
      maxW={500}
      w="100%"
      mx="auto"
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AbsoluteCenter p="1" axis="both">
        <PulseLoader color={point} />
      </AbsoluteCenter>
    </Box>
  );
};
