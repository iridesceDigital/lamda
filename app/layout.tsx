import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

const font = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: '400'
});


export const metadata: Metadata = {
  title: "Lamda Building Design",
  description:
    "Architecture and structural engineering under one roof. Planning, building regs, structural & civil engineering.",
  metadataBase: new URL("https://lamda.example.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased bg-[#1B1B1B] text-white`}> 
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
