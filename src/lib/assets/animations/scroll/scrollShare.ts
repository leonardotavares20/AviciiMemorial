import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function createSmoothScrollShare(onComplete: () => void) {
  return ScrollTrigger.create({
    trigger: "#share-form__background",
    once: true,
    onEnter: () => {
      gsap.to("#share-form__button", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        delay: 1,
      });
      gsap.to("#share-form__background", {
        opacity: 1,
        duration: 2.5,
        delay: 0.7,
        onComplete: onComplete,
      });
    },
  });
}
