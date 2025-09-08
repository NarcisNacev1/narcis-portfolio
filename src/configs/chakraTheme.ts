import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'transparent',
                color: 'rgba(255, 255, 255, 0.65)',
                overflowY: 'scroll',
                msOverflowStyle: 'none',
            },
            html: {
                scrollbarWidth: 'none',
            },
            'body::-webkit-scrollbar': {
                display: 'none',
            },
            'html, body': {
                scrollBehavior: 'smooth',
            },
        },
    },
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },
});

export default theme;
