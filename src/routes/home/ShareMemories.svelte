<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Button from "@/components/Button/Button.svelte";
  import FieldsShare from "@/components/FieldsShare/FieldsShare.svelte";
  import { setOpacity } from "@/lib/helpers/setOpacity";
  import { ScrollShare } from "@/lib/assets/animations/scroll/ScrollShare";
  import { FormTimeline } from "@/lib/assets/animations/timeline/FormTimeline";
  import {
    scrollFormAnimationCompleted,
    formOpen,
  } from "$lib/stores/form-share";

  let timeline: gsap.core.Timeline;

  function showForm(): void {
    if (!$scrollFormAnimationCompleted) return;
    timeline.play();
    setOpacity("#share-form__background", 0, 0.3);
    formOpen.set(true);
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const scroll = new ScrollShare();
    scroll.getScroll();

    const formTimeline = new FormTimeline(true);
    timeline = formTimeline.getTimeline();

    return () => {
      return timeline.kill();
    };
  });
</script>

<section class:share-container--open={$formOpen} class="share-container">
  <div id="share-form" class="share-form">
    <img
      id="share-form__background"
      class="share-container__background"
      src="/world/worldmap.jpeg"
      alt="World Map"
    />
    <div
      class="share-form__container"
      class:share-container__container--open={$formOpen}
    >
      <Button
        id="share-form__button"
        on:clickButton={showForm}
        type="button"
        shareForm
      >
        Share your memories of Avicii
      </Button>
      <form
        on:submit|preventDefault={() => {
          throw Error("Holaaaaaaaaaaaaaaaa :D");
        }}
        id="share-form__form"
        class="share-form__form"
      >
        <FieldsShare {timeline} />
      </form>
    </div>
  </div>
</section>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_media'

    .share-container
      position: relative
      height: 100%
      width: 100%
      height: 110vh
      transition: 0.3s
      transform-origin: center

    .share-form
      width: 100%
      background: $black
      justify-content: center
      color: $white

    .share-form__form
      width: 500px
      height: 0
      overflow: hidden
      display: flex
      flex-direction: column
      align-items: center

    .share-container__background
      width: 100vw
      height: 100vh
      object-fit: cover
      z-index: 1
      position: absolute
      opacity: 0

    .share-form__container
      width: 100%
      height: 100vh
      // background: red
      top: 0
      z-index: 5
      position: relative
      display: grid
      justify-items: center
      align-content: center
  

    @media screen and (max-width: $mb-lg)
      .share-form__form
        width: 300px

      .share-container
        height: 60vh
        display: grid
        align-items: center

      .share-container--open
        height: 110vh

      .share-container__container--open
        height: 100vh

      .share-container__background
        height: 60vh

      .share-form__container
        height: 60vh

      // .share-container--open
      //   height: 800px
      //   transition: 0.5s
</style>
