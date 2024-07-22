import gsap from "gsap";
import { BaseScroll } from "../bases/BaseScroll";

export class ScrollInstagram extends BaseScroll {
  constructor(options: ScrollTrigger.StaticVars = {}) {
    super(options);
  }

  protected setupScroll(): void {
    this.options = {
      trigger: "#section-instagram",
      once: true,
      onEnter: () => {
        gsap.to("#section-instagram", {
          opacity: 1,
          start: "top center",
          duration: 3,
        });
      },
    };
  }
}
