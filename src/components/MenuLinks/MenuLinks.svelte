<script lang="ts">
  import HoverCard from "../HoverCard/HoverCard.svelte";
  import Anchor from "../Anchor/Anchor.svelte";
  import Menu from "../Menu/Menu.svelte";
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
  <Anchor
    on:mouseEnterAnchor={mouseEnterHandler}
    on:mouseLeaveAnchor={mouseLeaveHandler}
    href={"/"}
    ancorMenu>Join The Community</Anchor
  >
  <Anchor href={"/"} ancorMenu>Shop</Anchor>
  {#if mouseEnter}
    <button>Oi</button>
  {/if}
</Menu>
