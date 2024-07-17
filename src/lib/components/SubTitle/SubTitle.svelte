<script lang="ts">
  export let sm: boolean = false;
  export let md: boolean = false;
  export let lg: boolean = false;
</script>

<h2
  id="subtitle"
  class="subtitle"
  class:subtitle--large={lg}
  class:subtitle--medium={md}
  class:subtitle--small={sm}
>
  <slot />
</h2>

<style lang="sass">
    @import '../../../styles/variables/_color'

    .subtitle
      font-size: 1.25rem
      letter-spacing: 5px
      margin: auto
      font-weight: 500
      color: $white
      opacity: 0
      margin-top: 100px
      margin-bottom: 100px
      text-transform: uppercase
      text-align: center
      line-height: 28px

    .subtitle--large
        max-width: 800px
        font-size: 1.5rem


    .subtitle--medium
        max-width: 530px
        font-size: 1.25rem


    .subtitle--small
        max-width: 300px
        font-size: 1rem
</style>
