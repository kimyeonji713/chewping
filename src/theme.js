import { theme as chakraTheme, extendBaseTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

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
