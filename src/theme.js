import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";



const palette = {
    primary: {
        main: "#800000",
    },
    secondary: {
        main: "#FFF8DC"
    },
}

const typography = {
    fontFamily: [
        'Heebo',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 18,
}

export const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});

export default createTheme({
    direction: "rtl",
    typography: typography,
    palette: palette
});
