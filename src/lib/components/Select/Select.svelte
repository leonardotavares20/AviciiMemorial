<script lang="ts">
  import type { CountryRequest } from "$lib/repositories/CountryRepository";

  export let options: Array<{ name: string; value: string }>;
  export let name: string;
</script>

<div class="select">
  <select class="select__field" {name} id="">
    <option class="select__option" disabled selected value="0"
      >Select Country</option
    >
    {#await options}
      <option value="0" selected>Loading Countries...</option>
    {:then options}
      {#each options as option}
        <option value={option.value} class="select__option" aria-hidden="true">
          {option.name}
        </option>
      {/each}
    {/await}
  </select>
  <img
    class="select__arrowDown"
    src="/arrows/arrowDown.svg"
    aria-hidden="true"
    alt=""
  />
</div>

<style lang="sass">
    @import '../../../styles/variables/_color'
    @import '../../../styles/variables/_border'

  .select
    position: relative
    text-align: start
    user-select: none

  .select__field
    display: flex
    -webkit-appearance: none
    letter-spacing: 1px
    text-transform: uppercase
    border: $bd-width-sm solid $gray
    background: $dark-gray
    width: 100%
    font-size: 1rem
    padding: 1.2rem
    justify-content: space-between
    align-items: center
    color: $white
    cursor: pointer
    transition: 0.2s
    outline: none

  .select__arrowDown
    position: absolute
    bottom: 35%
    right: 5%
    pointer-events: none

  .select__field:hover,
  .select__field:focus
    border: $bd-width-sm solid $white

  .select__arrowDown
    width: 15px
    height: auto

  .select__option
    padding: .5rem 1rem
    text-transform: capitalize
    cursor: pointer
    font-size: .9rem
    transition: background 0.2s

  .select__option:hover
    background: $light-gray
</style>
