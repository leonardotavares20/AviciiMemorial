<script lang="ts">
  import HoverCard from "../HoverCard/HoverCard.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import Menu from "../Menu/Menu.svelte";
  import HoverOverlay from "../HoverOverlay/HoverOverlay.svelte";

  let mouseIsOver: boolean = false;

  const mouseEnter = (event: Event) => {
    mouseIsOver = true;
  };

  const mouseLeave = (event: Event) => {
    mouseIsOver = false;
  };
</script>

<Menu menuLinks>
  <Anchor href={"/"} ancorMenu>Tim Bergling Foundation</Anchor>
  <Anchor href={"/"} ancorMenu>Avicii Experience</Anchor>
  <HoverOverlay
    on:mouseEnterAnchor={mouseEnter}
    on:mouseLeaveAnchor={mouseLeave}
  >
    <Anchor href={""} ancorMenu>Join The Community</Anchor>
    <HoverCard mouseEnterOverlay={mouseIsOver} />
  </HoverOverlay>
  <Anchor href={"/"} ancorMenu>Shop</Anchor>
</Menu>
