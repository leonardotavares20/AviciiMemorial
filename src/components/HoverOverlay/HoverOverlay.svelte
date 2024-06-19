<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const mouseEnterAncorHandle = (event: Event) => {
    dispatch("mouseEnterAnchor");
  };

  const mouseLeaveAncorHandle = (event: Event) => {
    dispatch("mouseLeaveAnchor");
  };
</script>

<div
  aria-hidden="true"
  class="overlay"
  on:mouseenter={mouseEnterAncorHandle}
  on:mouseleave={mouseLeaveAncorHandle}
>
  <slot />
</div>
