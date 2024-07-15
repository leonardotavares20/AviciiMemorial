import gsap from "gsap";

export function setOpacityBackground(opacity: number): void {
  gsap.to("#share-form__background", {
    opacity: opacity,
    duration: 0.3,
  });
}
