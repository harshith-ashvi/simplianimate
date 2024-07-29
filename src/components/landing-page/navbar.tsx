"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import SimpliAnimate from "/public/full-logo.png";

const signInUrl = "https://app.simplianimate.com/signin";
const signUpUrl = "https://app.simplianimate.com/signup";

const navLinks = [
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/about" },
];

const mobileNavLinks = [
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/about" },
  { label: "Login", href: signInUrl },
];

const getClassName = (label: string) => {
  switch (label) {
    case "Login":
      return "text-[#36485C] font-medium";
    default:
      return "text-[#36485C] font-medium hover:underline";
  }
};

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleOpenNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "shadow-lg" : ""
      } w-full fixed top-0 left-0 bg-white z-[100]`}
    >
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
          <Link href="/">
            <Image src={SimpliAnimate} alt="SimpliAnimate" height={28} />
          </Link>
          <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#36485C] font-medium hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-8">
            <Link
              href={signInUrl}
              className="hidden lg:inline text-[#36485C] font-medium"
            >
              Login
            </Link>
            <Link
              href={signUpUrl}
              className="lg:px-6 px-2 py-1 font-medium rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200"
            >
              Sign Up
            </Link>
          </div>
          <div className="lg:hidden duration-200 ease-in">
            {isNavOpen ? (
              <X size={32} onClick={toggleOpenNav} />
            ) : (
              <Menu size={32} onClick={toggleOpenNav} />
            )}
          </div>
          <ul
            className={`lg:hidden absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-200 ease-in ${
              isNavOpen ? "top-12" : "top-[-490px]"
            }`}
          >
            {mobileNavLinks.map((link) => (
              <li
                className="md:ml-8 md:my-0 my-5 font-semibold"
                key={link.label}
              >
                <Link
                  href={link.href}
                  className={getClassName(link.label)}
                  target={
                    ["Login", "Sign Up"].includes(link.label) ? "_blank" : ""
                  }
                  onClick={toggleOpenNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
