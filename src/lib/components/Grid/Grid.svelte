
<ul class="grid"><slot /></ul>

<style lang="sass">
    .grid
        display: grid
        grid-template-columns: repeat(3, 1fr)
        width: 75%
        gap: 80px
        margin: auto
</style>
