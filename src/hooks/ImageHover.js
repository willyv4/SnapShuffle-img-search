/* eslint-disable array-callback-return */
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MyContext } from "../App";

export const useImageHoverEffect = (images) => {
  const imageElements = useRef([]);
  const { query } = useContext(MyContext);
  const [errorMessage, setErrorMessage] = useState("");

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
      if (element instanceof Element) {
        observer.observe(element);
      } else {
        console.warn("OBSERVER error: image element wans't type of element");
        setErrorMessage(
          `Whoops, no photos were found with search query: ${query}`
        );
      }
    });

    return () => observer.disconnect();
  }, [images, query]);

  return { imageElements, errorMessage };
};
