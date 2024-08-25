import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
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
        <PulseLoader color="#178254" />
      </AbsoluteCenter>
    </Box>
  );
};
