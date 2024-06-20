<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      "#memory-container__banner",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      0.5
    );
    timeline.fromTo(
      "#memory-container__memory-board",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      1
    );
    timeline.fromTo(
      "#memory-container__details",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      1.5
    );
    timeline.fromTo(
      "#memory-container__name",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      2
    );
  });
</script>

<section class="memory-container">
  <img
    id="memory-container__banner"
    class="memory-container__banner"
    src="/banner/studio-tim.webp"
    alt=""
  />
  <div class="memory-container__titles">
    <div class="memory-container__titles-content">
      <img
        id="memory-container__memory-board"
        class="memory-container__memory-board"
        src="/titles/titleMemoryBoard.svg"
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
        alt="Avicii"
      />
    </div>
  </div>
  <div class="memory-container__overlay"></div>
</section>

<style lang="sass">
    .memory-container
      position: relative
      user-select: none
      color: white
      overflow: hidden
      height: 110vh

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
      object-fit: cover
      transform: translateY(-45px)

    .memory-container__titles
      display: flex
      width: 100%
      position: absolute
      bottom: calc(15% + 5px)
      justify-content: center

    .memory-container__titles-content
      max-width: 750px
      text-align: center
      width: 60%

    .memory-container__details
      display: grid
      row-gap: 8px

    .memory-container__text
      font-size: 1.3rem
      letter-spacing: 4.5px

    .memory-container__dates
      font-size: 0.6rem
      letter-spacing: 5px

    .memory-container__name
      padding-top: 50px
</style>
