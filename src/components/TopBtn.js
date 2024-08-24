import { Button } from "@chakra-ui/react";

export const TopBtn = () => {
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
      bgColor={"#BACD92"}
      colorScheme="green"
      w={"50px"}
      h={"50px"}
    >
      TOP
    </Button>
  );
};
