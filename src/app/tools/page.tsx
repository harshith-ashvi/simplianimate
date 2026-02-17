import Image from "next/image";
import Link from "next/link";

export default function Tools() {
  return (
    <div className="lg:container lg:mx-auto lg:px-20 mt-20 mb-20 px-4">
      <div className="flex flex-col items-center justify-evenly">
        <p className="text-4xl my-8">Tools</p>
      </div>
      <div className="flex items-start">
        <Link
          className="flex items-center justify-center p-4 border border-grey-300 rounded-lg hover:translate-x-1 hover:translate-y-1"
          href="/tools/file-converter"
        >
          <div className="p-2 border border-slate-200 rounded-lg">
            <Image
              src={`${process.env.SUPABASE_ASSET_URL}/landing-page/file-converter.png`}
              alt="file-converter"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col items-start justify-center ml-6">
            <p className="font-bold text-xl text-[#1d1c1c]">File Converter</p>
            <p className="text-base text-black max-w-[16rem] ">
              Convert your images, videos, and audio files to any format with
              just a few clicks
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
