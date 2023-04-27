"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import React, { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const handleLogout = useCallback(async () => {
    await signOut();
  }, []);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div className="hidden rounded-full lg:block text-sm font-semibold py-3 px-4 hover:bg-neutral-100 transition cursor-pointer">
          Rent your space
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md flex gap-3 items-center flex-row"
          onClick={handleMenu}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-14 right-0 w-42 bg-white rounded-md shadow-md ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col  gap-2 ">
              <div className="md:hidden">
                <Avatar />
              </div>
              <div className="flex flex-col">
                {currentUser ? (
                  <>
                    <MenuItems onClick={() => {}} label="My Favorites" />
                    <MenuItems onClick={() => {}} label="My Trips" />
                    <MenuItems onClick={() => {}} label="My Reservations" />
                    <MenuItems onClick={() => {}} label="Rent your space" />
                    <hr />
                    <MenuItems onClick={signOut} label="Logout" />
                  </>
                ) : (
                  <>
                    <MenuItems onClick={loginModal.onOpen} label="Log in" />
                    <MenuItems onClick={registerModal.onOpen} label="Sign up" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
