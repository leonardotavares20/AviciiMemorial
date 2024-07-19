
<ul id="grid" class="grid"><slot /></ul>

<style lang="sass">
    @import '../../../styles/variables/_spacing'

    .grid
        display: grid
        grid-template-columns: repeat(3, 1fr)
        width: 75%
        gap: $sp-lg-4x
        opacity: 0
        margin: auto
</style>
