<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let name: string = "";
  export let formHeader: boolean = false;
  export let shareName: boolean = false;
  export let shareStory: boolean = false;
  export let shareFile: boolean = false;

  const dispatcher = createEventDispatcher();

  function mouseEnterLabel() {
    dispatcher("mouseEnterLabel");
  }

  function mouseLeaveLabel() {
    dispatcher("mouseLeaveLabel");
  }
</script>

<label
  class="label"
  on:mouseenter={mouseEnterLabel}
  on:mouseleave={mouseLeaveLabel}
  class:label--file-label={shareFile}
  class:label--share-name={shareName}
  class:label--share-story={shareStory}
  class:label--form-header={formHeader}
  for={name}><slot /></label
>

<style lang="sass">
    @import '../../../styles/variables/_color'

    .label--form-header
      position: relative
      display: flex
      align-items: center
      color: $gray
      gap: 20px

    .label--form-header:hover
      color: $light-gray

    .label--share-story
      font-weight: 900
      color: $white
      letter-spacing: 2px
      text-align: center
      margin-bottom: 10px

    .label--share-name
      display: block
      width: 0px
      height: 0px
      overflow: hidden

    .label--file-label
      width: 100%
      margin-top: 10px
      font-weight: 600 
      cursor: pointer
      letter-spacing: 2px
      text-decoration: underline
      text-decoration-thickness: 1px
      text-underline-offset: 5px
</style>
