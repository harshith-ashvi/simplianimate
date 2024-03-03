import { useEffect, useRef, useState } from "react";

const aspectRatio = {
  Portrait: { aspectRatioWidth: 9, aspectRatioHeight: 16 },
  Landscape: { aspectRatioWidth: 16, aspectRatioHeight: 9 },
  Square: { aspectRatioWidth: 1, aspectRatioHeight: 1 },
};

const PostCardCanvas = ({
  width,
  height,
  screenResolution,
}: {
  width: number;
  height: number;
  screenResolution: string;
}) => {
  const [canvasDimension, setCanvasDimesnion] = useState({
    width: (height * 9) / 16,
    height: height,
  });
  console.log("canvasDimension", canvasDimension);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvasWidth, canvasHeight;

    const { aspectRatioWidth, aspectRatioHeight } =
      aspectRatio[screenResolution];

    // Calculate canvas dimensions to fit in the div with 9x16 aspect ratio
    canvasHeight = height;
    canvasWidth = height * (aspectRatioWidth / aspectRatioHeight);

    // Check if calculated width exceeds the div's width
    if (canvasWidth > width) {
      // Adjust based on width being the limiting factor
      canvasWidth = width;
      canvasHeight = width * (aspectRatioHeight / aspectRatioWidth);
    }

    setCanvasDimesnion({ width: canvasWidth, height: canvasHeight });
  }, [width, height, screenResolution]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "aqua",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        width={canvasDimension.width}
        height={canvasDimension.height}
        style={{ backgroundColor: "yellow", display: "block" }}
      />
    </div>
  );
};

export default PostCardCanvas;
