import Link from "next/link";
import { Activity, Menu } from "lucide-react";

const navLinks = [
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/about" },
];

const signInUrl = "https://app.simplianimate.com/signin";
const signUpUrl = "https://app.simplianimate.com/signup";

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Link href="/">
          <Activity size={32} />
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
        <div className="hidden lg:flex items-center gap-x-8">
          <Link href={signInUrl} className="text-[#36485C] font-medium">
            Login
          </Link>
          <Link
            href={signUpUrl}
            className="px-6 py-1 font-medium rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200"
          >
            Sign Up
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu size={32} />
        </div>
      </div>
    </nav>
  );
}
