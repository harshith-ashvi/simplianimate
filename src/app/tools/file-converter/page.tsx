"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import DropZone from "./dropzone";

export default function FileConverter() {
  const router = useRouter();
  return (
    <div className="lg:container lg:mx-auto lg:px-20 mt-20 mb-20 px-4">
      <Button
        className="flex items-center"
        variant="ghost"
        onClick={() => router.back()}
      >
        <ChevronLeft className="mr-2" size={20} />
        Back
      </Button>
      <div className="flex flex-col items-center justify-evenly gap-4 flex-wrap mb-2">
        <p className="text-4xl mt-8">File Converter</p>
        <p className="text-xl text-center">
          Effortlessly convert your images, videos, and audio files to any
          format with just a few clicks. One file at a time.
        </p>
        <p className="text-xl mb-2 text-center">
          A converter right inside the browser.
        </p>
      </div>
      <DropZone />
    </div>
  );
}
