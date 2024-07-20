import gsap from "gsap";
import { BaseScroll } from "../bases/BaseScroll";

export class ScrollRemembering extends BaseScroll {
  constructor(options: ScrollTrigger.StaticVars = {}) {
    super(options);
  }

  protected setupScroll(): void {
    this.options = {
      trigger: "#remembering-content",
      once: true,
      onEnter: () => {
        gsap.to("#remembering-content", {
          opacity: 1,
          start: "end end",
          duration: 2.5,
        });
      },
    };
  }
}
