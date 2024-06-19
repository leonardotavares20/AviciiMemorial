<script lang="ts">
  import HoverCard from "../HoverCard/HoverCard.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import Menu from "../Menu/Menu.svelte";
  import HoverOverlay from "../HoverOverlay/HoverOverlay.svelte";
  
  let mouseEnter: boolean = false;

const mouseEnterHandler = (event: Event) => {
    mouseEnter = true;
  };

  const mouseLeaveHandler = (event: Event) => {
    mouseEnter = false;
  };
</script>

<Menu menuLinks>
  <Anchor href={"/"} ancorMenu>Tim Bergling Foundation</Anchor>
  <Anchor href={"/"} ancorMenu>Avicii Experience</Anchor>
  <HoverOverlay
    on:mouseEnterAnchor={mouseEnterHandler}
    on:mouseLeaveAnchor={mouseLeaveHandler}
  >
    <Anchor href={""} ancorMenu>Join The Community</Anchor>
    <HoverCard mouseEnterOverlay={true} />
  </HoverOverlay>
  <Anchor href={"/"} ancorMenu>Shop</Anchor>
</Menu>
