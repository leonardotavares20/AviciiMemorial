import gsap from "gsap";
import { BaseScroll } from "../bases/BaseScroll";

export class ScrollMemories extends BaseScroll {
  constructor(options: ScrollTrigger.StaticVars = {}) {
    super(options);
  }

  protected setupScroll(): void {
    this.options = {
      trigger: "#grid",
      once: true,
      onEnter: () => {
        gsap.to("#subtitle", {
          opacity: 1,
          start: "top top",
          duration: 2.5,
        });
        gsap.to("#grid", {
          opacity: 1,
          delay: 0.5,
          start: "end end",
          duration: 2.5,
        });
      },
    };
  }
}
