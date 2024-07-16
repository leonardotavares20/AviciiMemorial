<script lang="ts">
  import { onMount } from "svelte";
  import Links from "./Links.svelte";
  import Grid from "$lib/components/Grid/Grid.svelte";
  import { memories } from "$lib/assets/memories/memories";
  import SubTitle from "$lib/components/SubTitle/SubTitle.svelte";
  import MemoryItem from "$lib/components/MemoryItem/MemoryItem.svelte";
  import { ScrollMemories } from "$lib/assets/animations/scroll/ScrollMemories";

  onMount(() => {
    const scroll = new ScrollMemories();
    scroll.getScroll();
  });
</script>

<section id="memories-section" class="memories-section">
  <Links />
  <SubTitle md>
    Take a few minutes and read the avicii stories and memories people have
    shared from all over the world.
  </SubTitle>
  <Grid>
    {#each memories as { date, from, message }, index}
      <MemoryItem {date} {from} {message} />
    {/each}
  </Grid>
</section>

<style lang="sass">
    .memories-section
      margin: auto
      color: white
</style>
