import { useEffect, useRef } from "react";

const Canvas = () => {
  const ref = useRef();

  const draw = (context) => {
    var col = function (x, y, r, g, b) {
      context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      context.fillRect(x, y, 1, 1);
    };

    var R = function (x, y, t) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var x;
    var y;
    var t = 0;

    var run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }

      t = t + 0.015;

      window.requestAnimationFrame(run);
    };

    run();
  };

  useEffect(() => {
    const canvas = ref.current;

    canvas.width = 32;
    canvas.height = 32;

    const context = canvas.getContext("2d");

    draw(context);
  });

  return <canvas className="fixed w-full h-full saturate-[150%]" ref={ref} />;
};

export default Canvas;
