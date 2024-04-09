import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Old_Standard_TT } from "next/font/google";
import { Navbar } from "@/components/Navbar";

const oldStandard = Old_Standard_TT({
  weight: "700",
  subsets: ["latin"],
  variable: "--old-standard-tt"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real or fake healdine",
  description: "What is even real anymore?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
