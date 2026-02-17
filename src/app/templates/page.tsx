import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { templatePage } from "@/data/animationTemplates";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplianimate.vercel.app/templates"),
  title: "Templates",
  description: "Animation templates made easy & simple",
};

export default function Templates() {
  return (
    <div className="max-container">
      <div className="flex items-center justify-evenly gap-4 flex-wrap">
        <p className="text-4xl my-8">Templates</p>
      </div>
      <div className="flex items-center justify-evenly gap-4 flex-wrap mx-4">
        {templatePage.map((template) => (
          <Link
            href={`https://app-simplianimate.netlify.app/${template.alt}`}
            key={template.alt}
            className="hover:translate-x-1 hover:translate-y-1"
          >
            <Image
              src={template.src}
              alt={template.alt}
              width={480}
              height={270}
              unoptimized
              className="rounded-xl border-2 border-white hover:border-2 hover:border-zinc-400 "
            />
            <p className="text-base py-2">{template.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
