"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
// import { extendTheme } from '@mui/material/styles'; // If using CSS theme variables.

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
