/* eslint-disable array-callback-return */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useImageHoverEffect = (images) => {
  const imageElements = useRef([]);

  useEffect(() => {
    if (!images) return;

    const observer = new IntersectionObserver((entries, self) => {
      const targets = entries.map((entry) => {
        if (entry.isIntersecting) {
          self.unobserve(entry.target);
          return entry.target;
        }
      });

      gsap.to(targets, {
        opacity: 1,
        stagger: 0.1,
      });

      targets.forEach((target) => {
        if (target) {
          target.addEventListener("mouseenter", () => {
            gsap.to(target.querySelector("img"), { scale: 1.3, duration: 1.4 });
          });

          target.addEventListener("mouseleave", () => {
            gsap.to(target.querySelector("img"), { scale: 1, duration: 1 });
          });
        }
      });
    });

    imageElements.current.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [images]);

  return { imageElements };
};
