import gsap from "gsap";

export function setOpacity(
  trigger: string,
  opacity: number,
  duration: number,
): void {
  gsap.to(trigger, {
    opacity: opacity,
    duration: duration,
  });
}
