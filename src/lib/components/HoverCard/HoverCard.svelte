<script lang="ts">
  import FormHeader from "../FormHeader/FormHeader.svelte";

  export let mouseEnterOverlay = true;
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
    .overlay
      height: 100px
      position: absolute
      width: 202px
      pointer-events: none

    .overlay--pointerEvent
      pointer-events: auto

    .hoverCard
      padding: 1rem
      color: white
      width: 22rem
      top: 70%
      margin-top: 2.3rem
      background-color: black
      border: 1px solid #434343
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
