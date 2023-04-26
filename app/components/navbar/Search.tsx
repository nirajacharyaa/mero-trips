"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="border-[1px] rounded-full shadow-sm w-2/3 md:w-auto py-2 hover:shadow-md cursor-pointer transition duration-200 ease-in-out">
      <div className="flex items-center justify-between flex-row">
        <div className="text-sm font-semibold px-6">anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          any&nbsp;week
        </div>
        <div className="text-sm pl-auto sm:pl-6 pr-2 font-semibold flex items-center gap-3 flex-row flex-1 text-center">
          <div className="hidden sm:block text-gray-400">add&nbsp;guests</div>
          <div className="p-2 bg-blue-600 rounded-full text-white ml-auto sm:ml-0 ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
