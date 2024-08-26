import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const PageNotFound = () => {
  const pointColor = useColorModeValue("#178254", "#FFAD60");
  const bg = useColorModeValue("#fdfdfd", "#011627");

  return (
    <Box
      maxW={"500px"}
      mx={"auto"}
      h={"800px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bgColor={bg}
    >
      <Text textAlign={"center"} fontSize={"35px"} color={pointColor}>
        Page Not Found
      </Text>
      <Button marginTop={"50px"} bg={pointColor}>
        <Link to={routes.home}>
          <Text color={"#fff"}>홈으로 돌아가기</Text>
        </Link>
      </Button>
    </Box>
  );
};
