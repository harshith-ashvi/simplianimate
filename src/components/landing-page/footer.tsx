import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-4 max-container">
      <p className="text-sm">© 2024 SimpliAnimate. All rights reserved</p>
      <div className="flex items-center gap-x-8">
        <Link href="/terms-and-condition">
          <p className="text-sm">Terms & Condition</p>
        </Link>
        <Link href="/privacy-policy">
          <p className="text-sm">Privacy Policy</p>
        </Link>
        <Link href="https://www.instagram.com/simplianimate" target="_blank">
          <Instagram size={20} />
        </Link>
      </div>
    </div>
  );
}
