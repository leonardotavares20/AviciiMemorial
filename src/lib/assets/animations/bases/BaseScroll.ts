import ScrollTrigger from "gsap/dist/ScrollTrigger";

export abstract class BaseScroll {
  protected scroll: ScrollTrigger;
  protected options: ScrollTrigger.StaticVars;
  
  constructor(options: ScrollTrigger.StaticVars = {}) {
    this.options = options;
    this.setupScroll();
    this.scroll = ScrollTrigger.create(this.options);
  }

  protected abstract setupScroll(): void;

  public getScroll(): ScrollTrigger {
    return this.scroll;
  }
}
