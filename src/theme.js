import { theme as chakraTheme, extendBaseTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { Button, Modal, Alert } = chakraTheme.components;

const fonts = {
  heading: `"Dongle", sans-serif`,
  body: `"Noto Sans KR", sans-serif`,
};

const components = {
  Button,
  Modal,
  Alert,
};

const _theme = extendBaseTheme({
  components,
  config,
  fonts,
});

export default _theme;
