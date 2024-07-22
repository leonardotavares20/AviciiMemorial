<script lang="ts">
  import { onMount } from "svelte";
  import Grid from "@/components/Grid/Grid.svelte";
  import SubTitle from "@/components/SubTitle/SubTitle.svelte";
  import InstagramCard from "@/components/InstagramCard/InstagramCard.svelte";
  import { instagramCards } from "@/lib/assets/instagram/instagram";
  import { ScrollInstagram } from "@/lib/assets/animations/scroll/ScrollInstagram";

  onMount(() => {
    const scroll = new ScrollInstagram();
    scroll.getScroll();
  });
</script>

<section id="section-instagram" class="section-instagram">
  <SubTitle instagram>Instagram</SubTitle>
  <Grid instagram>
    {#each instagramCards as { type, alt, target, background }}
      <InstagramCard {type} {background} {alt} {target} />
    {/each}
  </Grid>
</section>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'

    .section-instagram
        margin: auto
        color: $white
        opacity: 0
        margin-top: 10rem
        padding-bottom: 5rem
</style>
