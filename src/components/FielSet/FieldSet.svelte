<script lang="ts">
  export let shareForm: boolean = false;
</script>

<fieldset class:fieldset-share-form={shareForm}>
  <slot></slot>
</fieldset>

<style lang="sass">
    @import '@/styles/variables/_spacing'
    
    .fieldset-share-form
        display: flex
        gap: $sp-sm-1x
        justify-content: center
        margin-bottom: $sp-md-2x
        align-items: center
        flex-direction: column
        text-align: center
</style>
