import gsap from "gsap";
import { BaseScroll } from "../bases/BaseScroll";

export class ScrollLinks extends BaseScroll {
  constructor(options: ScrollTrigger.StaticVars = {}) {
    super(options);
  }

  protected setupScroll(): void {
    this.options = {
      trigger: "#links-container",
      once: true,
      onEnter: () => {
        gsap.to("#links-container", {
          opacity: 1,
          start: "end end",
          duration: 2.5,
        });
      },
    };
  }
}
