<script lang="ts">
  export let type: string = "text";
  export let name: string = "";
  export let placeholder: string = "";
  export let disabled: boolean = false;
  export let value: string = "";
  export let pattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
  export let input: HTMLInputElement | string = "";

  export let white: boolean = false;
  export let borderWhite: boolean = false;

  export let fileInput: boolean = false;
</script>

<input
  id={name}
  {type}
  {name}
  {value}
  {disabled}
  {placeholder}
  {pattern}
  autocomplete="off"
  class:input--white={white}
  class:input--borderWhite={borderWhite}
  class={!fileInput ? "input" : "input-file"}
  on:change
  on:input
  bind:this={input}
/>

<style lang="sass">
    @import '../../../styles/variables/_color'
    @import '../../../styles/variables/_border'
    @import '../../../styles/variables/_spacing'
    @import '../../../styles/variables/_font'

  .input
    display: block
    padding: 1.2rem 0rem 1.2rem 1.2rem
    max-width: 332px
    font-size: $ft-md
    border: $bd-width-sm solid #434343
    background: $dark-gray
    color: $white
    transition: 0.2s
    z-index: 10
    letter-spacing: 1px
  
  .input:hover
    border: $bd-width-sm solid $white

  .input::placeholder
    font-size: $ft-md
    color: $white
    letter-spacing: 1px
    text-transform: uppercase

  .input--white
    width: 408px
    height: 52px
    max-width: 410px
    background-color: $white
    height: 52px
    padding: 0px $sp-md-2x

  .input--white::placeholder
    color: $light-gray
    font-size: $ft-md
    text-transform: capitalize

  .input--borderWhite
    border: $bd-width-sm solid $white

  .input-file
    display: block
    width: 0px
    height: 0px
    overflow: hidden
</style>
