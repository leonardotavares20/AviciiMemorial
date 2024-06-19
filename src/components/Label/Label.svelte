<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let name = "";

  const dispatcher = createEventDispatcher();

  function mouseEnterLabel() {
    dispatcher("mouseEnterLabel");
  }

  function mouseLeaveLabel() {
    dispatcher("mouseLeaveLabel");
  }
</script>

<label
  on:mouseenter={mouseEnterLabel}
  on:mouseleave={mouseLeaveLabel}
  class="label"
  for={name}><slot /></label
>

<style lang="sass">
    .label
        position: relative
        display: flex
        align-items: center
        gap: 15px
        color: #434343
        width: 62%

    .label:hover
      color: #999999
</style>
