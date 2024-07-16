<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Button from "$lib/components/Button/Button.svelte";
  import FieldsShare from "$lib/components/FieldsShare/FieldsShare.svelte";
  import { setOpacityBackground } from "$lib/assets/animations/form/shareForm";
  import { ScrollShare } from "$lib/assets/animations/scroll/ScrollShare";
  import { FormTimeline } from "$lib/assets/animations/timeline/FormTimeline";
  import { scrollFormAnimationCompleted } from "$lib/stores/form-share";

  let timeline: gsap.core.Timeline;

  function showForm(): void {
    if (!$scrollFormAnimationCompleted) return;
    timeline.play();
    setOpacityBackground(0);
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

<section class="share-container">
  <div id="share-form" class="share-form">
    <img
      id="share-form__background"
      class="share-container__background"
      src="/world/worldmap.jpeg"
      alt="World Map"
    />
    <div class="share-form__container">
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
    .share-container
      position: relative
      height: 100%
      background: white

    .share-form
      width: 100%
      background: black
      justify-content: center
      color: white

    .share-form__form
      width: 500px
      height: 0
      overflow: hidden
      display: flex
      flex-direction: column
      align-items: center

    .share-container__background
      width: 100%
      z-index: 1
      opacity: 0

    .share-form__container
      width: 100%
      position: absolute
      display: grid
      justify-items: center
      bottom: 50%
      transform: translateY(45%)
</style>
