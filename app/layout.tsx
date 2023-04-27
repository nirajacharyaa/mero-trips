import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

import { Modak, Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });
export const metadata = {
  title: "Mero Trips",
  description:
    " Mero Trips is a travel blog website where you can find travel blogs, travel tips, travel guides, travel stories, travel experiences, travel destinations, travel photos, travel videos, travel vlogs, travel diaries, travel journa",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} data-superjson />
        {children}
      </body>
    </html>
  );
}
