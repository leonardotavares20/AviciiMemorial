import Lenis from "lenis";
import gsap from "gsap";

let lenis: any;

export function createSmoothScroll(): void {
  lenis = new Lenis();

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
}

export function destroySmoothScroll() {
  if (lenis) {
    gsap.ticker.remove(lenis.raf);
    lenis.destroy();
    lenis = null;
  }
}
