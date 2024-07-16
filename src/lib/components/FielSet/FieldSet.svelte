<script lang="ts">
  export let shareForm: boolean = false;
</script>

<fieldset class:fieldset-share-form={shareForm}>
  <slot></slot>
</fieldset>

<style lang="sass">
    .fieldset-share-form
        display: flex
        gap: 10px
        justify-content: center
        margin-bottom: 20px
        align-items: center
        flex-direction: column
        text-align: center
</style>
