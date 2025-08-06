import React from "react";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="dark:text-white self-center whitespace-nowrap text-sm font-semibold sm:text-xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-500 rounded-lg text-white">
          Shope
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        className="w-13 h-10 lg:hidden border border-gray-500 text-gray-800"
        pill
      >
        <AiOutlineSearch size={24} />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-13 h-10 hidden sm:inline border border-gray-500 text-gray-800"
          pill
        >
          <FaMoon size={18} />
        </Button>
        <Link to="/singin">
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-400 to-sky-600">
            Sing In
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink
          to="/"
          className={`font-semibol text-sm md:text-base ${
            path === "/"
              ? "bg-slate-300 px-3 text-sky-800 md:px-0 py-0.5 md:bg-transparent"
              : ""
          }`}
          as={Link}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`font-semibol text-sm md:text-base ${
            path === "/about"
              ? "bg-slate-300 text-sky-800 md:px-0 px-3 py-0.5 md:bg-transparent"
              : ""
          }`}
          as={Link}
        >
          About
        </NavLink>
        <NavLink
          className={`font-semibol text-sm md:text-base ${
            path === "/project"
              ? "bg-slate-300 text-sky-800 md:px-0 px-3 py-0.5 md:bg-transparent"
              : ""
          }`}
          to="/project"
          as={Link}
        >
          Project
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
