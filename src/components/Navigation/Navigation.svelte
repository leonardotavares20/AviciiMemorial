<header class="header">
  <nav class="navigation">
    <slot />
  </nav>
</header>

<style lang="sass">
    .header
        width: 100%
        text-align: center
        z-index: 10
        display: flex
        justify-content: center
        background: black
        position: sticky
        top: 0
        height: 150px

  .navigation
        width: 93%
        display: grid
        grid-template-columns: 1fr 3fr 1.2fr
        align-items: center
</style>
