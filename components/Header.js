import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky  grid grid-cols-3 z-50 bg-white shadow-md px-5 py-5">
      <div className=" md:shadow-sm relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2">
        <input
          className="pl-5 flex-grow outline-none bg-transparent"
          type="text"
          placeholder="Start your search"
          text-sm
          text-gray-600
          placeholder-gray-600
        />
        <SearchIcon className=" hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 rounded-full p-2 space-x-2 items-center">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
