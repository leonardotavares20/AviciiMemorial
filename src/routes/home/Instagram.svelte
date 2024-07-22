<script lang="ts">
  import Grid from "@/components/Grid/Grid.svelte";
  import SubTitle from "@/components/SubTitle/SubTitle.svelte";
  import InstagramCard from "@/components/InstagramCard/InstagramCard.svelte";
</script>

<section class="section-instagram">
  <SubTitle instagram>Instagram</SubTitle>
  <Grid instagram>
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
    <InstagramCard />
  </Grid>
</section>

<style lang="sass">
    @import '@/styles/variables/_color'

    .section-instagram
        margin: auto
        display: grid
        justify-content: center
        color: $white
</style>
