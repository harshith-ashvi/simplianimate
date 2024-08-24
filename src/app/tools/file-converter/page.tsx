import DropZone from "./dropzone";

export default function FileConverter() {
  return (
    <div className="lg:container lg:mx-auto lg:px-20 mt-20 mb-20 px-4">
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
