<script lang="ts">
  import Select from "../Select/Select.svelte";
  interface EventOption {
    detail: string;
  }
  
  let options = [
    { value: "brazil", label: "Brazil" },
    { value: "eua", label: "EUA" },
  ];

  const getOptionHandler = (event: EventOption) => {
    console.log(event.detail);
  };
</script>

<div class="hoverCard">
  <Select on:changeOption={getOptionHandler} {options} />
</div>

<style lang="sass">
    .hoverCard
        width: 24rem
        padding: 1rem
        background-color: black
        color: white
</style>
