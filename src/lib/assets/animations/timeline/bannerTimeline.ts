import gsap from "gsap";
import { BaseTimeline } from "../../bases/BaseTimeline";

export class BannerTimeline extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline(): void {
    this.timeline
      .to("#memory-container__banner", { opacity: 1, duration: 1.5 }, 0.5)
      .to("#memory-container__memory-board", { opacity: 1, duration: 2 }, 1)
      .to("#memory-container__details", { opacity: 1, duration: 2 }, 1.5)
      .to("#memory-container__name", { opacity: 1, duration: 2 }, 2);
  }
}
