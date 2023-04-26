"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);
  const registerModal = useRegisterModal();
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
        <div className="absolute top-14 right-0 w-36 bg-white rounded-md shadow-md ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col  gap-2 ">
              <div className="md:hidden">
                <Avatar />
              </div>
              <div className="flex flex-col">
                <MenuItems onClick={() => {}} label="Log in" />
                <MenuItems onClick={registerModal.onOpen} label="Sign up" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
