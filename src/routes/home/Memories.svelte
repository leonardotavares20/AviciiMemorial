<script lang="ts">
  import { onMount } from "svelte";
  import Links from "./Links.svelte";
  import Grid from "@/components/Grid/Grid.svelte";
  import { memories } from "$lib/assets/memories/memories";
  import SubTitle from "@/components/SubTitle/SubTitle.svelte";
  import MemoryItem from "@/components/MemoryItem/MemoryItem.svelte";
  import { ScrollMemories } from "$lib/assets/animations/scroll/ScrollMemories";
  import Pagination from "@/components/Pagination/Pagination.svelte";

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
  <Grid memories>
    {#each memories as { date, from, message }, index}
      <MemoryItem {date} {from} {message} />
    {/each}
  </Grid>
  <Pagination />
</section>

<style lang="sass">
    @import '@/styles/variables/_color'

    .memories-section
      margin: auto
      color: $white
</style>
