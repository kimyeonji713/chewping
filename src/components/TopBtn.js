import { Button, useColorModeValue } from "@chakra-ui/react";

export const TopBtn = () => {
  const bg = useColorModeValue("#BACD92", "#FFAD60");
  const scheme = useColorModeValue("green", "orange");

  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={topHandler}
      position={"fixed"}
      bottom={"20px"}
      right={"5%"}
      bgColor={bg}
      colorScheme={scheme}
      w={"50px"}
      h={"50px"}
      zIndex={"10"}
    >
      TOP
    </Button>
  );
};
