<script lang="ts">
  export let type;
  export let disabled = false;
  export let large = false;
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class:large-button={large}
  class="button"
  {type}
  {disabled}
>
  <slot />
</button>

<style lang="sass">
    .button
        background: black
        color: white
        font-family: 'Lato'
        text-transform: uppercase
        border: 2px solid #434343
        letter-spacing: 2px
        font-weight: 600
        cursor: pointer
        transition: 0.2s

    .button:hover
        border-color: white
        z-index: 10
        transition: 0.2s

    .large-button
        width: 417px
        height: 72px
        font-size: 1.1rem
        border-color: white
</style>
