<script lang="ts">
  export let type = "text";
  export let name = "";
  export let placeholder = "";
  export let disabled = false;
  export let pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

  //Modifiers
  export let large = false;
  export let borderWhite = false;

  function handleChangeInput(event: Event) {
    console.log(event);
  }
</script>

<input
  {type}
  {name}
  id={name}
  {disabled}
  {placeholder}
  {pattern}
  class="input"
  class:input--large={large}
  class:input--borderWhite={borderWhite}
  on:input={handleChangeInput}
/>

<style lang="sass">
  .input
    display: block
    padding: 1.2rem 0rem 1.2rem 1.2rem
    max-width: 332px
    font-size: 1rem
    border: 1px solid #434343
    background: #161616
    color: white
    transition: 0.2s
    z-index: 10
  
  .input::placeholder
    font-size: 1rem
    color: white
    letter-spacing: 1px
    text-transform: uppercase

  .input--large
    width: 500px

  .input--borderWhite
    border: 1px solid #434343

  .input:hover
    border: 1px solid white
</style>
