<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let shareForm: boolean = false;
  export let maxlength: number = 50;
  export let name: string = "";
  export let id: string = "";
  export let rows: number = 10;
  export let input: HTMLTextAreaElement;

  const dispatcher = createEventDispatcher();

  function dispatchValue(): void {
    dispatcher("inputChange");
  }
</script>

<textarea
  bind:this={input}
  {name}
  {id}
  {rows}
  {maxlength}
  on:input={dispatchValue}
  class:text_area-story={shareForm}
></textarea>

<style lang="sass">
    .text_area-story
        width: 408px
        resize: none 
        height: 200px
        border: 0
        border-radius: 0
        padding: 20px
        font-size: 1rem
</style>
