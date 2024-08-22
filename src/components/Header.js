import { Box, Button, Heading } from "@chakra-ui/react";
import { LuTreePine } from "react-icons/lu";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FaSun } from "react-icons/fa";

export const Header = () => {
  return (
    <Box
      maxW="500px"
      w={"100%"}
      h={"70px"}
      mx="auto"
      boxShadow={"rgb(232, 234, 246) 0px 0px 5px 5px;"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Link to={routes.home}>
        <Box
          w={"100%"}
          h={"70px"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          padding={"10px"}
        >
          <LuTreePine fontSize={"25px"} fontWeight={"900"} color={"#75A47F"} />
          <Heading
            fontSize={"25px"}
            fontWeight={"900"}
            fontFamily={`"Dongle", sans-serif`}
            letterSpacing={"2px"}
            color={"#75A47F"}
          >
            츄핑
          </Heading>
        </Box>
      </Link>

      <Button bgColor={"#fff"} color={"#FFAD60"} fontSize={"18px"}>
        <FaSun />
      </Button>
    </Box>
  );
};
