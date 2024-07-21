import { Globe } from "lucide-react";
import Image from "next/image";

const templates = [
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/matrix.gif",
    alt: "matrix-rain",
  },
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/text-reveal.gif",
    alt: "text-reveal",
  },
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/quiz.gif",
    alt: "quiz",
  },
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/text-falling.gif",
    alt: "text-falling",
  },
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/gradient-arora.gif",
    alt: "gradient-arora",
  },
  {
    src: "https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/landing-page/text-flyers.gif",
    alt: "text-flyers",
  },
];

export default function Templates() {
  return (
    <div className="max-container my-4 flex flex-col items-center">
      <div className="flex items-center justify-center mt-4 mb-2">
        <Globe />
        <p className="ml-2 text-2xl font-semibold">Explore the templates</p>
      </div>
      <p className="mb-4 text-center mx-4">
        More templates coming soon. You can also request for templates.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-2">
        {templates.map((template) => (
          <Image
            key={template.alt}
            src={template.src}
            alt={template.alt}
            width={180}
            height={320}
          />
        ))}
      </div>
    </div>
  );
}
