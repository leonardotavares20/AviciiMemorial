import gsap from "gsap";

export function setOpacity(
  trigger: string,
  opacity: number,
  duration: number,
  visibility?: string,
): void {
  gsap.to(trigger, {
    opacity: opacity,
    duration: duration,
    ease: 'sine',
    visibility: visibility || "visible",
  });
}
