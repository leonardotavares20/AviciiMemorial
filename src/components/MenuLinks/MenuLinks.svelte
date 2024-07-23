<script lang="ts">
  import HoverCard from "../HoverCard/HoverCard.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import Menu from "../Menu/Menu.svelte";
  import HoverOverlay from "../HoverOverlay/HoverOverlay.svelte";
  import FormHeader from "../FormHeader/FormHeader.svelte";
  import ButtonMobile from "../ButtonMobile/ButtonMobile.svelte";
  import { mediaQuery } from "svelte-legos";

  let mouseIsOver: boolean = false;

  const isLargeScreen = mediaQuery("(max-width: 1024px)");

  function mouseEnter(event: CustomEvent): void {
    mouseIsOver = true;
  }

  function mouseLeave(event: CustomEvent): void {
    mouseIsOver = false;
  }

  function handleToggleButton(event: CustomEvent) {
    return event.detail;
  }
</script>

<div class="menu-links">
  {#if $isLargeScreen}
    <ButtonMobile on:clickmobilebutton={handleToggleButton} />
  {/if}
  <Menu menuLinks>
    <Anchor href="/" ancorMenu>Tim Bergling Foundation</Anchor>
    <Anchor href="/" ancorMenu>Avicii Experience</Anchor>
    <HoverOverlay
      on:mouseEnterAnchor={mouseEnter}
      on:mouseLeaveAnchor={mouseLeave}
    >
      <Anchor href="" ancorMenu>Join The Community</Anchor>
      <HoverCard mouseEnterOverlay={mouseIsOver}>
        <FormHeader />
      </HoverCard>
    </HoverOverlay>
    <Anchor href="/" ancorMenu>Shop</Anchor>
  </Menu>
</div>

<style lang="sass">
  @import '@/styles/variables/_media'
  @import '@/styles/variables/_border'
  @import '@/styles/variables/_color'

  .menu-links
    position: relative

  @media screen and (max-width: $tb-md)
    .menu-links
      padding: 0
      display: flex
      grid-area: menu
      align-items: center
      justify-content: flex-end
</style>
