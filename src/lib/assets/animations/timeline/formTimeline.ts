import gsap from "gsap";

export function createTimelineForm(): gsap.core.Timeline {
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
        height: "80vh",
        minHeight: "800px",
        duration: 0.3,
        onStart: () => {
          gsap.to(window, {
            duration: 0.5,
            ease: "sine",
            scrollTo: "#share-form__background",
          });
        },
      },
      0.3
    );
}
