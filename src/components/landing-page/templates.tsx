import Image from "next/image";
import { Globe } from "lucide-react";

import { homePageTemplates } from "@/data/animationTemplates";

export default function Templates() {
  return (
    <div className="max-container my-4 flex flex-col items-center">
      <div className="flex items-center justify-center mt-4 mb-2">
        <Globe size={28} />
        <p className="ml-2 text-4xl font-semibold">Explore templates</p>
      </div>
      <p className="mb-4 text-center mx-4">
        More templates coming soon. You can also request for templates.
      </p>

      <div className="flex items-center justify-evenly flex-wrap gap-2">
        {homePageTemplates.map((template) => (
          <Image
            key={template.alt}
            src={template.src}
            alt={template.alt}
            width={180}
            height={320}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
