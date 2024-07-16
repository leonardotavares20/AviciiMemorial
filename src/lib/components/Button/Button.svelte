<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type;
  export let disabled: boolean = false;
  export let id: string = "";
  export let closeForm: boolean = false;
  export let shareForm: boolean = false;
  export let cancelFile: boolean = false;
  export let submitForm: boolean = false;

  let dispatcher = createEventDispatcher();

  function handleClick() {
    dispatcher("clickButton");
  }
</script>

<button
  on:click={handleClick}
  class:button--close-form={closeForm}
  class:button--share-form={shareForm}
  class:button--send={submitForm}
  class:button--cancel-file={cancelFile}
  class="button"
  {id}
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
        overflow: hidden

    .button:hover
        border-color: white
        z-index: 10
        transition: 0.2s

    .button--share-form
        width: 417px
        height: 72px
        opacity: 0
        transform: translateY(30px)
        font-size: 1.1rem
        margin-bottom: 10px
        border: 2px solid white

    .button--close-form
        width: 110px
        width: 130px
        height: 72px
        z-index: 10
        font-size: 1.1rem
        border-color: white
        margin-bottom: 50px

    .button--cancel-file
        background: transparent
        text-decoration: underline
        border: 0
        color: white
        font-size: 1rem
        text-decoration-thickness: 1px
        text-underline-offset: 5px

    .button--send
        width: 110px
        height: 50px
        font-size: 0.9rem
        border-color: white
        margin-bottom: 10px
</style>
