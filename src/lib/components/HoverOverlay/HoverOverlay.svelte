<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const mouseEnterAncor = (event: Event): void => {
    dispatch("mouseEnterAnchor");
  };

  const mouseLeaveAncor = (event: Event): void => {
    dispatch("mouseLeaveAnchor");
  };
</script>

<div
  aria-hidden="true"
  class="overlay"
  on:mouseenter={mouseEnterAncor}
  on:mouseleave={mouseLeaveAncor}
>
  <slot />
</div>
