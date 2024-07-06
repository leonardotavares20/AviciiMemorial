<script lang="ts">
  import Links from "./Links.svelte";
  import { memories } from "../../assets/memories/memories";
  import Grid from "../../components/Grid/Grid.svelte";
  import MemoryItem from "../../components/MemoryItem/MemoryItem.svelte";
  import SubTitle from "../../components/SubTitle/SubTitle.svelte";
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
