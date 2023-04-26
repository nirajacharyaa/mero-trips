import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

import { Modak, Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });
export const metadata = {
  title: "Mero Trips",
  description:
    " Mero Trips is a travel blog website where you can find travel blogs, travel tips, travel guides, travel stories, travel experiences, travel destinations, travel photos, travel videos, travel vlogs, travel diaries, travel journa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
