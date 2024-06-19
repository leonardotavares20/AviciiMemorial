<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  export let countries: Array<{ name: string; code: string }>;
  let selectedOption: string;
  let selectedCode: string = "";
  let open: boolean = false;
  export let name = "";

  const dispatch = createEventDispatcher();
  let componentElement: HTMLElement;

  function selectOptionHandler(name: string, code: string) {
    open = false;
    selectedOption = name;
    selectedCode = code;
    dispatch("changeOption", { name, code });
  }

  function toggleDropdown() {
    open = !open;
    if (open) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }
  }

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      open = false;
      document.removeEventListener("keydown", handleEscapeKey);
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (componentElement && !componentElement.contains(event.target as Node)) {
      open = false;
      document.removeEventListener("keydown", handleEscapeKey);
    }
  }

  onMount(() => {
    if (typeof document !== "undefined")
      document.addEventListener("click", handleClickOutside);
  });

  onDestroy(() => {
    if (typeof document !== "undefined")
      document.removeEventListener("click", handleClickOutside);
  });
</script>

<div bind:this={componentElement} class="select">
  <div
    class="select__field"
    class:select__field--focus={open}
    on:click={toggleDropdown}
    tabindex="0"
    role="button"
    aria-hidden="true"
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    {selectedOption ? selectedOption : "Select Country"}
    <img
      class="select__arrowDown"
      src="/arrows/arrowDown.svg"
      aria-hidden="true"
      alt=""
    />
    <input
      class="select__input"
      type="text"
      id={name}
      {name}
      value={selectedCode || ""}
    />
  </div>
  {#if open}
    <ul class="select__options" role="listbox">
      {#each countries as country}
        <li
          class="select__option"
          aria-hidden="true"
          on:click={() => selectOptionHandler(country.name, country.code)}
        >
          {country.name}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="sass">
  .select
    position: relative
    text-transform: uppercase
    text-align: start
    user-select: none
    letter-spacing: 1px

  .select__field
    display: flex
    border: 1px solid #434343
    background: #161616
    padding: 1.2rem
    justify-content: space-between
    align-items: center
    color: white
    cursor: pointer
    transition: 0.2s
    outline: none

  .select__input
    position: absolute
    opacity: 0
    cursor: pointer
    height: 0
    width: 0

  .select__field:hover,
  .select__field:focus
    border: 1px solid white

  .select__field--focus
    border-radius: 5px

  .select__arrowDown
    width: 15px
    height: auto

  .select__options
    position: absolute
    width: 100%
    background: black
    max-height: 10rem
    overflow-y: auto
    z-index: 1000
    margin-top: 5px
    padding: 0
    list-style: none

  .select__option
    padding: .5rem 1rem
    cursor: pointer
    font-size: .9rem
    transition: background 0.2s

    &:hover
      background: #434343
</style>
