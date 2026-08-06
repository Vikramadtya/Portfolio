"use client";

import { useCallback, useEffect, useRef } from "react";
import siteMetadata from "@/lib/metadata";
import Image from "next/image";

const Avatar = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const rafRef = useRef(null);

  /* Only register the 3D tilt effect on desktop (xl: 1280px+).
     On smaller screens the listeners are never attached → zero overhead. */
  const isDesktop = useRef(false);

  const onMouseMove = useCallback((e) => {
    if (!containerRef.current || !imageRef.current || !isDesktop.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const { width, height, x, y } = containerRef.current.getBoundingClientRect();
      const mouseX = Math.abs(clientX - x);
      const mouseY = Math.abs(clientY - y);
      const rotateMin = -15;
      const rotateMax = 15;
      const rotateRange = rotateMax - rotateMin;

      const rotateX = rotateMax - (mouseY / height) * rotateRange;
      const rotateY = rotateMin + (mouseX / width) * rotateRange;

      imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (imageRef.current) {
       imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    isDesktop.current = mq.matches;

    const handler = (e) => {
      isDesktop.current = e.matches;
      if (!e.matches && imageRef.current) {
        imageRef.current.style.transform = "";
      }
    };
    mq.addEventListener("change", handler);

    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      mq.removeEventListener("change", handler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (!el) return;
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className="z-10 scale-100 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]"
      style={{ perspective: "800px" }}
      ref={containerRef}
    >
      <div
        ref={imageRef}
        className="rounded-md transition-transform duration-200 ease-out will-change-transform"
      >
        <Image
          src={siteMetadata.avatarImage}
          alt={siteMetadata.author}
          width={400}
          height={300}
          priority
          className="h-auto w-full object-cover"
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
