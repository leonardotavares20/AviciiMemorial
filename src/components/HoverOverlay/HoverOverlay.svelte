<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const mouseEnterAncor = (event: Event) => {
    dispatch("mouseEnterAnchor");
  };

  const mouseLeaveAncor = (event: Event) => {
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
