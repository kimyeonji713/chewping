import { theme as chakraTheme, extendBaseTheme } from "@chakra-ui/react";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "#75A47F",
    components: ["Button"],
  })
);

const { Button, Modal, Alert } = chakraTheme.components;

const components = {
  Button,
  Modal,
  Alert,
};

const _theme = extendBaseTheme({
  components,
  config,
});

export default _theme;
