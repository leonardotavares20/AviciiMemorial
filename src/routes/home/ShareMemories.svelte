<script lang="ts">
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import gsap from "gsap";

  import Button from "../../components/Button/Button.svelte";

  let animationBackgroundComplete = false;

  function openFormHandler() {
    if (!animationBackgroundComplete) return;
    gsap.to("#share-container__background", {
      opacity: 0,
    });
    gsap.to("#share-container__button", {
      duration: 0.2,
      border: 0,
      scaleY: 0,
    });
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#share-container__background",
      once: true,
      onEnter: () => {
        gsap.to("#share-container__button", {
          duration: 2.5,
          opacity: 1,
          y: 0,
          delay: 1,
          onComplete: () => {
            animationBackgroundComplete = true;
          },
        });
        gsap.to("#share-container__background", {
          opacity: 1,
          duration: 2.5,
          delay: 0.7,
        });
      },
    });
  });
</script>

<section class="share-container">
  <img
    id="share-container__background"
    class="share-container__background"
    src="/world/worldmap.jpeg"
    alt="World Map"
  />
  <div id="share-container__button" class="share-container__button">
    <Button onClick={openFormHandler} type="button" large
      >Share your memories of Avicii</Button
    >
  </div>
</section>

<style lang="sass">
    .share-container
        position: relative

    .share-container__background
        width: 100%
        opacity: 0

    .share-container__button
        position: absolute
        opacity: 0
        transform: translateY(50px)
        width: 100%
        top: 46%
        display: flex
        justify-content: center
</style>
