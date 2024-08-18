<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { selectFocused } from "@/lib/stores/form-header";

  const dispatch = createEventDispatcher();

  const mouseEnterAncor = (event: Event): void => {
    dispatch("mouseEnterAnchor");
  };

  const mouseLeaveAncor = (event: Event): void => {
    if ($selectFocused) {
      return;
    }
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
