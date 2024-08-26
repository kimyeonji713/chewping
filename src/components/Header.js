import {
  Box,
  Button,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";
import { useEffect, useState } from "react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(FaMoon, FaSun);
  const logoColor = useColorModeValue("#178254", "#FFAD60");
  const bg = useColorModeValue("#fdfdfd", "#011627");
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    setScrollPosition(scrollPosition);
  });
  return (
    <Box
      onScroll={scrollHandler}
      maxW="500px"
      w={"100%"}
      h={"70px"}
      mx="auto"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={bg}
      position={scrollPosition < 100 ? " relative" : "fixed"}
      top={"0"}
      left={"0"}
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
          <GiCampfire fontSize={"25px"} fontWeight={"900"} color={logoColor} />
          <Heading
            fontSize={"25px"}
            fontWeight={"900"}
            fontFamily={`"Dongle", sans-serif`}
            letterSpacing={"2px"}
            color={logoColor}
          >
            츄핑
          </Heading>
        </Box>
      </Link>

      <IconButton
        bgColor={bg}
        color={logoColor}
        fontSize={"18px"}
        onClick={toggleColorMode}
        variant={"ghost"}
        aria-label="Toggle dark mode"
        icon={<Icon />}
      ></IconButton>
    </Box>
  );
};
