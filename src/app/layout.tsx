import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Outfit generator",
  description: "Outfit generator using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppBar position="static">
          <Toolbar sx={{ bgcolor: "#f5f5f5", color: "red" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bolder" }}
            >
              Outfit generator
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
