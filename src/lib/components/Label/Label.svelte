<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let name = "";
  export let formHeader = false;
  export let shareName = false;
  export let shareStory = false;
  export let shareFile = false;

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
    .label--form-header
      position: relative
      display: flex
      align-items: center
      color: #434343
      gap: 20px

    .label--form-header:hover
      color: #999999

    .label--share-story
      font-weight: 900
      color: white
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
