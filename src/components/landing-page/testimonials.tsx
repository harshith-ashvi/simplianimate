import Image from "next/image";
import { Sparkles, Youtube } from "lucide-react";

import samruddhaKannada from "/public/samruddha-Kannada.png";

export default function Testimonials() {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="flex items-center justify-center mt-4 mb-2">
        <Sparkles size={28} />
        <p className="ml-2 text-4xl font-semibold">Made for creators</p>
      </div>
      <p className="mb-4 text-center mx-4">
        Content creators are already started using in their videos
      </p>
      <div className="h-[24rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Image
            src={samruddhaKannada}
            alt="samruddha-kannada"
            height={60}
            width={60}
            className="rounded-full border-2 border-emerald-500"
          />
          <p className="w-96 text-lg text-center text-black font-semibold">
            &quot;Creating short quiz type videos for my class and YouTube has
            been so easy and I don&apos;t have to use any video editor.&quot;
          </p>
          <div>
            <p className="text-center text-black font-bold">
              Samruddha Kannada
            </p>
            <div className="flex items-center justify-center gap-x-1">
              <Youtube color="red" />
              <p className="text-center text-black font-bold">
                35K+ Subscribers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
