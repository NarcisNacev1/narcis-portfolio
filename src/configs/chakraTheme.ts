import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "transparent",
                color: "rgba(255,255,255,0.65)"
            },
        }
    },
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },
});

export default theme;