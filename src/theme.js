import { extendBaseTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const _theme = extendBaseTheme({
  components,
  config,
});

export default _theme;
