<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let options: Array<{ value: string; label: string }>;
  let selectedOption: string;
  let open: boolean = false;

  let dispach = createEventDispatcher();

  function selectOption(option: string) {
    open = false;
    selectedOption = option;
    dispach("changeOption", option);
  }
</script>

<div class="custom-select">
  <div aria-hidden="true" class="selected" on:click={() => (open = !open)}>
    {selectedOption ? selectedOption : "SELECT Country"}
  </div>
  {#if open}
    <ul class="options">
      {#each options as option}
        <li
          aria-hidden="true"
          class="option"
          on:click={() => selectOption(option.label)}
        >
          {option.label}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="sass">
  .custom-select
    position: relative
    text-transform: uppercase
    width: 100%
  
  .selected
    background: black
    color: white
    padding: 1.2rem
    cursor: pointer
    border: 1px solid gray

  .options
    position: absolute
    width: 99.5%
    background: black
    border: 1px solid gray
    border-top: 0px
    max-height: 10rem
    overflow-y: auto
    z-index: 1000

  .option
    padding: 1rem
    cursor: pointer

    &:hover
      background: gray
</style>
