import { Box } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Box maxW={500} w="100%" mx="auto">
      <AbsoluteCenter p="1" axis="both">
        <PulseLoader />
      </AbsoluteCenter>
    </Box>
  );
};
