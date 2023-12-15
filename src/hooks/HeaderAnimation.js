import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const useCustomAnimation = () => {
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    if (animationRef.current) {
      const context = gsap.context(() => {
        const t1 = gsap.timeline();

        t1.from("#nav-bar", {
          yPercent: "-1000",
          duration: 0.5,
        });

        t1.from("#intro-roller", {
          xPercent: "750",
          duration: 0.8,
          rotate: 360,
        });

        t1.from("#letters", {
          opacity: 0,
          duration: 0.1,
          stagger: {
            each: 0.1,
          },
          reversed: true,
        });
      }, animationRef);

      return () => context.revert();
    }
  }, []);

  return animationRef;
};

export default useCustomAnimation;
