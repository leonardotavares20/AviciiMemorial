<script lang="ts">
  export let mouseEnterOverlay: boolean = true;
  import { mediaQuery } from "svelte-legos";

  let isTabletScreen = mediaQuery("(max-width: 1024px)");
</script>

<div class="overlay" class:overlay--pointerEvent={mouseEnterOverlay}>
  <div class="hoverCard" class:hoverCard--visible={mouseEnterOverlay}>
    {#if !$isTabletScreen}
      <img
        class="hoverCard__arrow"
        src="/arrows/arrowHoverCard.svg"
        alt=""
        aria-hidden="true"
      />
    {/if}
    <slot></slot>
  </div>
</div>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_border'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_media'

    .overlay
      height: 100px
      position: absolute
      width: 202px
      display: grid
      justify-content: center
      pointer-events: none

    .overlay--pointerEvent
      pointer-events: auto

    .hoverCard
      padding: $sp-md
      color: $white
      width: 22rem
      top: 100%
      margin-top: $sp-lg-1x
      background-color: $black
      border: $bd-width-sm solid $gray
      transition: 0.2s ease
      opacity: 0

    .hoverCard--visible
      opacity: 1
      transition: 0.2s ease

    .hoverCard__arrow
      position: absolute
      left: 50%
      transform: translateY(-34px)

    @media screen and (max-width: $tb-md)
        .overlay
          height: 100%
          position: relative
          opacity: 1
          width: 202px
          display: grid
          justify-content: center
          pointer-events: all

        .hoverCard
          opacity: 1
          border: 0
          position: relative
          top: 0

</style>
