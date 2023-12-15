import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const useImageBounceEffect = (image) => {
  const imagePreviewRef = useRef(null);

  useEffect(() => {
    const parent = imagePreviewRef.current;

    if (image) {
      gsap.fromTo(
        parent,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }

    return () => {};
  }, [image]);

  return { imagePreviewRef };
};
