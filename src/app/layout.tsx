import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "./fonts/Raleway";
import LenisScroll from "./components/LenisScroll";
import Scroll from "./components/sections/Scroll";



// import Grid from "./components/grid/Grid";


export const metadata: Metadata = {
  title: "Yassydotme portfolio",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>

      <body
        className={`${Raleway.className} bg-[var(--background-black)]  text-white antialiased `}
        suppressHydrationWarning
      >
        <LenisScroll>
     
            <main>{children}</main>
        
        </LenisScroll>
      </body>
    </html>
  );
}
