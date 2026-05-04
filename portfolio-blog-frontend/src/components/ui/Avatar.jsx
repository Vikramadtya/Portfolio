"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import siteMetadata from "@/lib/metadata";
import Image from "next/image";

const Avatar = () => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  /* Only register the 3D tilt effect on desktop (xl: 1280px+).
     On smaller screens the listeners are never attached → zero overhead. */
  const isDesktop = useRef(false);

  const onMouseMove = useCallback((e) => {
    if (!ref.current || !isDesktop.current) return;

    const { clientX, clientY } = e;
    const { width, height, x, y } = ref.current.getBoundingClientRect();
    const mouseX = Math.abs(clientX - x);
    const mouseY = Math.abs(clientY - y);
    const rotateMin = -15;
    const rotateMax = 15;
    const rotateRange = rotateMax - rotateMin;

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    isDesktop.current = mq.matches;

    const handler = (e) => {
      isDesktop.current = e.matches;
      if (!e.matches) setStyle({});
    };
    mq.addEventListener("change", handler);

    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      mq.removeEventListener("change", handler);
      if (!el) return;
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className="z-10 scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]"
      style={{ perspective: "800px" }}
      ref={ref}
    >
      <div
        style={style}
        className="max-h-[430px] rounded-md transition-all duration-200 ease-out"
      >
        <Image
          src={siteMetadata.avatarImage}
          alt={siteMetadata.author}
          width={400}
          height={300}
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          style={{
            boxShadow: "13px 13px 43px #b3b3b3",
            borderRadius: "6px",
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
