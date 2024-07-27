<script lang="ts">
  import { onMount } from "svelte";
  import { BannerTimeline } from "@/lib/assets/animations/timeline/BannerTimeline";

  let timeline: gsap.core.Timeline;

  onMount(() => {
    const bannerTimeline = new BannerTimeline(false);
    timeline = bannerTimeline.getTimeline();

    return () => {
      timeline.kill();
    };
  });
</script>

<section class="memory-container">
  <img
    id="memory-container__banner"
    class="memory-container__banner"
    src="/banner/studio-tim.webp"
    fetchpriority="high"
    alt="Tim Bergling"
  />
  <div class="memory-container__titles">
    <div class="memory-container__titles-content">
      <img
        id="memory-container__memory-board"
        class="memory-container__memory-board"
        src="/titles/titleMemoryBoard.svg"
        fetchpriority="high"
        alt="The Avicii Memory"
      />
      <div id="memory-container__details" class="memory-container__details">
        <p class="memory-container__text">IN LOVING MEMORY</p>
        <p class="memory-container__dates">1989.09.08 – 2018.04.20</p>
      </div>
      <img
        id="memory-container__name"
        class="memory-container__name"
        src="/name/nameAvicii.svg"
        fetchpriority="high"
        alt="Avicii"
      />
    </div>
  </div>
  <div class="memory-container__overlay"></div>
</section>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_font'
    @import '@/styles/variables/_media'

    .memory-container
      position: relative
      user-select: none
      color: $white
      contain: content
      container-type: inline-size
      content-visibility: visible
      container-name: menu-container
      overflow: hidden
      height: 110vh

    @container menu-container (max-width: 1024px)
      .memory-container__banner
          width: 120%
          height: 110%
          margin-top: 20px
          transition: 0.2s

      .memory-container__overlay
          height: 10%

    .memory-container__overlay
      position: absolute
      z-index: 10
      left: 0
      bottom: 0
      height: 10%
      width: 100%
      background: linear-gradient(to bottom, transparent, black)

    .memory-container__banner
      width: 100%
      height: 110%
      transition: 0.2s
      object-position: 12% -2.40rem
      object-fit: cover
      opacity: 0

    .memory-container__memory-board
      opacity: 0

    .memory-container__titles
      display: flex
      width: 100%
      container-type: inline-size
      container-name: titles
      position: absolute
      bottom: calc(15% + 5px)
      justify-content: center

    @container titles (max-width: 768px)
      .memory-container__text
        padding-top: 0.5rem

      .memory-container__name
        padding-top: $sp-lg-1x

    .memory-container__titles-content
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      width: clamp(min(90%, 400px), 90%, max(35vw, 750px))
      text-align: center

    .memory-container__details
      display: grid
      opacity: 0
      row-gap: $sp-sm

    .memory-container__text
      font-size: clamp(1rem, $ft-md-3x, 2vw)
      letter-spacing: 4.5px

    .memory-container__dates
      font-size: $ft-sm
      letter-spacing: 5px

    .memory-container__name
      padding-top: $sp-lg-3x
      opacity: 0
      max-width: 130px
</style>
