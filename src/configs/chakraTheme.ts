import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "transparent",
                color: "rgba(255,255,255,0.65)",
                overflowY: "scroll", // Ensure scrollable content without visible scrollbar
                "-ms-overflow-style": "none", // Internet Explorer 10+
            },
            html: {
                scrollbarWidth: "none", // Firefox
            },
            "body::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, and Opera
            },
            "html, body": {
                scrollBehavior: "smooth",
            },
        },
    },
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },
});

export default theme;
