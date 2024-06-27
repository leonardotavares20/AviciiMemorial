import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function createShareSmooth(onComplete: () => void) {
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

export function createTimelineForm() {
  return gsap
    .timeline({ paused: true })
    .to("#share-form__button", {
      height: 0,
      border: 0,
      duration: 0.1,
      ease: "sine",
    })
    .to("#share-form__button", {
      display: "none",
      opacity: 0,
      onReverseComplete: () => {
        gsap.to("#share-form__button", {
          display: "block",
          opacity: 1,
        });
      },
    })
    .to(
      "#share-form__form",
      {
        height: 600,
        duration: 0.3,
      },
      0.3
    );
}
