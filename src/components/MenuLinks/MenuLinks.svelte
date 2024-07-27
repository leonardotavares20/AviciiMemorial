<script lang="ts">
  import HoverCard from "../HoverCard/HoverCard.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import Menu from "../Menu/Menu.svelte";
  import HoverOverlay from "../HoverOverlay/HoverOverlay.svelte";
  import FormHeader from "../FormHeader/FormHeader.svelte";
  import ButtonMobile from "../ButtonMobile/ButtonMobile.svelte";
  import { setOpacity } from "@/lib/helpers/setOpacity";
  import { mediaQuery } from "svelte-legos";

  const isTabletScreen = mediaQuery("(max-width: 1024px)");
  let mouseIsOver: boolean = false;
  let mobileMenuIsOpen: boolean = false;

  function mouseEnter(event: CustomEvent): void {
    mouseIsOver = true;
  }

  function mouseLeave(event: CustomEvent): void {
    mouseIsOver = false;
  }

  function handleToggleButton(event: CustomEvent): void {
    mobileMenuIsOpen = event.detail;
    if (mobileMenuIsOpen) setOpacity(".menu-links", 1, 0.2);
    if (!mobileMenuIsOpen) setOpacity(".menu-links", 0, 0.15);
  }
</script>

<div class="menu-navigation">
  {#if $isTabletScreen}
    <ButtonMobile on:clickmobilebutton={handleToggleButton} />
  {/if}
  <Menu {mobileMenuIsOpen} menuLinks>
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

  .menu-navigation
    position: relative

  @media screen and (max-width: $tb-md)
    .menu-navigation
      padding: 0
      display: flex
      grid-area: menu
      align-items: center
      justify-content: flex-end
</style>
