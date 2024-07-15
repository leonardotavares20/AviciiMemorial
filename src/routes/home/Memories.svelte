<script lang="ts">
  import Links from "./Links.svelte";
  import { memories } from "$lib/assets/memories/memories";
  import Grid from "$lib/components/Grid/Grid.svelte";
  import MemoryItem from "$lib/components/MemoryItem/MemoryItem.svelte";
  import SubTitle from "$lib/components/SubTitle/SubTitle.svelte";
</script>

<section class="memories-section">
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
