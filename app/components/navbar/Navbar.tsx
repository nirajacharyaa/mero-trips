"use client";
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import React from "react";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed bg-white w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-4">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} data-superjson />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
