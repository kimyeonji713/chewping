import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FaSun } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";

export const Header = () => {
  return (
    <Box
      maxW="500px"
      w={"100%"}
      h={"70px"}
      mx="auto"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#fff"}
      position={"fixed"}
      top={"0"}
      left={"36.9%"}
      zIndex={"10"}
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
          <GiCampfire fontSize={"25px"} fontWeight={"900"} color={"#178254"} />
          <Heading
            fontSize={"25px"}
            fontWeight={"900"}
            fontFamily={`"Dongle", sans-serif`}
            letterSpacing={"2px"}
            color={"#178254"}
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
