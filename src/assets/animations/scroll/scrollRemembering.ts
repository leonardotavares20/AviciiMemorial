import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export function createSmoothScrollRemembering() {
  return ScrollTrigger.create({
    trigger: "#remembering-content",
    once: true,
    onEnter: () => {
      gsap.to("#remembering-content", {
        opacity: 1,
        start: "end end",
        duration: 2.5,
      });
    },
  });
}
