<script lang="ts">
  export let mouseEnterOverlay: boolean = true;
</script>

<div class="overlay" class:overlay--pointerEvent={mouseEnterOverlay}>
  <div class="hoverCard" class:hoverCard--visible={mouseEnterOverlay}>
    <img
      class="hoverCard__arrow"
      src="/arrows/arrowHoverCard.svg"
      alt=""
      aria-hidden="true"
    />
    <slot></slot>
  </div>
</div>

<style lang="sass">
    @import '../../../styles/variables/_color'
    @import '../../../styles/variables/_border'
    @import '../../../styles/variables/_spacing'

    .overlay
      height: 100px
      position: absolute
      width: 202px
      pointer-events: none

    .overlay--pointerEvent
      pointer-events: auto

    .hoverCard
      padding: $sp-md
      color: $white
      width: 22rem
      top: 70%
      margin-top: $sp-lg-1x
      background-color: $black
      border: $bd-width-sm solid $gray
      transform: translateX(-100px)
      transition: 0.2s ease
      opacity: 0

    .hoverCard--visible
      opacity: 1
      transition: 0.2s ease

    .hoverCard__arrow
      position: absolute
      transform: translateY(-34px)

</style>
