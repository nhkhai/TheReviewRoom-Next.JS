import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
// import { CssVarsProvider } from '@mui/material/styles'; // If using CSS theme variables.
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Review Room",
  description: "The Review Room web application. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AppRouterCacheProvider options={{ key: 'css' }}> // If overriding the default cache options to use a custom cache instead. To change the CSS key to css (the default is mui).  */}
        {/* <AppRouterCacheProvider options={{ enableCssLayer: true }}> // If using a styling solution other than Emotion to customize Material UI components.  */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
