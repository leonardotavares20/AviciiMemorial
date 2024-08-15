import gsap from "gsap";
import { BaseTimeline } from "../bases/BaseTimeline";

export class FormTimeline extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline(): void {
    this.timeline
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
          height: "80vh",
          minHeight: "800px",
          duration: 0.3,
          onStart: () => {
            gsap.to(window, {
              duration: 0.5,
              ease: "sine",
              scrollTo: "#share-section",
            });
          },
        },
        0.3
      );
  }
}
