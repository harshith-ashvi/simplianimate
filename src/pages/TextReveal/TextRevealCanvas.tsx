/* eslint-disable no-inner-declarations */
// import { utils } from "@/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FileSaver from "file-saver";

import { aspectRatio } from "@/data/canvas";


const TextRevealCanvas = ({
  width,
  height,
  downloadDuration,
  formData,
  downloadFile,
  resetFileDownload,
  toggleDownloading,
}: {
  width: number;
  height: number;
  downloadDuration: number;
  formData: {
    screenResolution: string;
    backgroundColor: string;
    font: string;
    fontSize: number;
    fontColor: string;
    stickSpeed: number;
    stickColor: string;
    stickSize: number;
    text: string;
  };
  downloadFile: {
    canDownload: boolean;
    fileName: string;
    fileFormat: string;
  };
  resetFileDownload: () => void;
  toggleDownloading: () => void;
}) => {
  const [canvasDimension, setCanvasDimesnion] = useState({
    width: (height * 9) / 16,
    height: height,
  });
  const once = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const newHeight = height - 100;
    const newWidth = width - 100;
    let canvasWidth, canvasHeight;

    const {
      aspectRatioWidth,
      aspectRatioHeight,
    }: { aspectRatioWidth: number; aspectRatioHeight: number } =
      aspectRatio[formData.screenResolution as keyof typeof aspectRatio];

    // Calculate canvas dimensions to fit in the div with 9x16 aspect ratio
    canvasHeight = newHeight;
    canvasWidth = newHeight * (aspectRatioWidth / aspectRatioHeight);

    // Check if calculated width exceeds the div's width
    if (canvasWidth > newWidth) {
      // Adjust based on width being the limiting factor
      canvasWidth = newWidth;
      canvasHeight = newWidth * (aspectRatioHeight / aspectRatioWidth);
    }

    setCanvasDimesnion({ width: canvasWidth, height: canvasHeight });
    once.current = false;
  }, [width, height, formData.screenResolution]);

  // Easing function for a smoother animation
  function easeInOutQuad(t: number, b:number, c:number, d:number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  useLayoutEffect(() => {
    if (canvasRef.current !== null) {
      const context = canvasRef.current.getContext("2d");
      if(!context) return 

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      let startTime: number | null = null;
      const duration = 2000; // 2 seconds in milliseconds
      const startWidth = 0;
      const endWidth = 20;
      const startHeight = 0;
      const endHeight = 200;
      const startX = 50;
      const startY = 50;

      // Function to update the rectangle size over time
      const draw = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const width = easeInOutQuad(
          elapsedTime,
          startWidth,
          endWidth - startWidth,
          duration
        );
        const height = easeInOutQuad(
          elapsedTime,
          startHeight,
          endHeight - startHeight,
          duration
        );

        context.clearRect(0, 0, width, height); // Clear the canvas
        context.fillStyle = "#FF0000";
        context.fillRect(startX, startY, width, height);

        if (elapsedTime < duration) {
          // Continue the animation loop
          requestAnimationFrame(draw);
        }
      };

      requestAnimationFrame(draw);
      context.save();
      context.translate(width / 2, height / 2);
      context.moveTo((-width / 2) + 30, -20);

      // Draw line to point (B)
      context.lineTo((-width / 2) + 50, -20);

      // Draw line to point (C)
      context.lineTo((-width / 2) + 40, 20);

      // Draw line to point (D)
      context.lineTo((-width / 2) + 20, 20);

      // Close the path and complete the parallelogram (back to point A)
      context.closePath();

      // You can fill the parallelogram
      context.fillStyle = 'blue';
      context.fill();
      context.restore()

    }
  }, [formData, canvasDimension]);

  const downloadAnimation = () => {
    if (canvasRef.current === null) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chunks: any = []; // here we will store our recorded media chunks (Blobs)
    const stream = canvasRef.current.captureStream(60); // grab our canvas MediaStream
    const options = { mimeType: `video/webm` };
    const rec = new MediaRecorder(stream, options); // init the recorder
    // every time the recorder has new data, we will store it in our array
    rec.ondataavailable = (e) => chunks.push(e.data);
    // only when the recorder stops, we construct a complete Blob from all the chunks
    // rec.onstop = () => exportVid(new Blob(chunks, { type: "video/webm" }));
    rec.onstop = () =>
      exportVid(new Blob(chunks, { type: `video/${downloadFile.fileFormat}` }));
    // rec.onstop = () => exportVid(new Blob(chunks, { type: "video/mp4" }));

    rec.start();
    setTimeout(() => rec.stop(), downloadDuration * 1000); // stop recording in 3s
  };

  function exportVid(blob: Blob) {
    const fileNameAndFormat =
      `${downloadFile.fileName}.${downloadFile.fileFormat}` ??
      `video.${downloadFile.fileFormat}`;
    FileSaver.saveAs(blob, fileNameAndFormat);
    toggleDownloading();
  }

  useEffect(() => {
    if (downloadFile.canDownload) {
      downloadAnimation();
      resetFileDownload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadFile]);

  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
      }}
      className="h-full flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        width={canvasDimension.width}
        height={canvasDimension.height}
        style={{ backgroundColor: "white", display: "block" }}
      />
    </div>
  );
};

export default TextRevealCanvas;
