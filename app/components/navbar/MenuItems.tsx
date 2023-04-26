"use client";

import React from "react";

interface MenuItemsProps {
  onClick: () => void;
  label: string;
}
const MenuItems: React.FC<MenuItemsProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="text-gray-800 hover:text-black cursor-pointer hover:bg-neutral-100 py-2 px-4 transition"
    >
      {label}
    </div>
  );
};

export default MenuItems;
