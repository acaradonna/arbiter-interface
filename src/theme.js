import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,

  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, red.500, yellow.500)',
        color: '#f5f0f6ff',
      }
    }

  }
};

const colors = {
}
const theme = extendTheme({ config });
export default theme;
