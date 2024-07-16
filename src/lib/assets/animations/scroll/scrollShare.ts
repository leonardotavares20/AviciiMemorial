import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BaseScroll } from "../bases/BaseScroll";
import { scrollFormAnimationCompleted } from "$lib/stores/form-share";

export class ScrollShare extends BaseScroll {
  constructor(options: ScrollTrigger.StaticVars = {}) {
    super(options);
  }

  protected setupScroll(): void {
    this.options = {
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
          onComplete: () => {
            scrollFormAnimationCompleted.set(true);
          },
        });
      },
    };
  }
}

export function createSmoothScrollShare(onComplete: () => void): ScrollTrigger {
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
