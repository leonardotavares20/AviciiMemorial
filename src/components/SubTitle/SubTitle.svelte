<script lang="ts">
  export let sm: boolean = false;
  export let md: boolean = false;
  export let lg: boolean = false;
  export let instagram = false;
</script>

<h2
  id="subtitle"
  class="subtitle"
  class:subtitle--large={lg}
  class:subtitle--medium={md}
  class:subtitle--small={sm}
  class:subtitle--instagram={instagram}
>
  <slot />
</h2>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_font'

    .subtitle
      font-size: $ft-md-2x
      letter-spacing: 5px
      margin: auto
      font-weight: 500
      color: $white
      opacity: 0
      margin-top: $sp-lg-5x
      margin-bottom: $sp-lg-5x
      text-transform: uppercase
      text-align: center
      line-height: 28px

    .subtitle--large
        max-width: 800px
        font-size: $ft-md-4x

    .subtitle--medium
        max-width: 530px
        font-size: $ft-md-2x

    .subtitle--small
        max-width: 300px
        font-size: $ft-md

    .subtitle--instagram
      text-transform: capitalize
      letter-spacing: 0.8px
      font-weight: 600
</style>
