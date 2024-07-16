<script lang="ts">
  export let name: string = "";
  export let hoverLabel: boolean = false;
</script>

<input type="checkbox" class="checkbox" {name} id={name} />
<span class="checkmark" class:checkmark--hoverLabel={hoverLabel}></span>

<style lang="sass">
  .checkmark
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    border: 1px solid #353535
    background-color: #000000
    pointer-events: none

  .checkmark:after 
    content: ""
    position: absolute
    display: none

  .checkbox:checked ~ .checkmark:after 
    display: block

  .checkmark:after 
    left: 7px
    top: 3px
    height: 9px
    width: 3.8px
    border: solid white
    border-width: 0 2px 2px 0
    -webkit-transform: rotate(45deg)
    -ms-transform: rotate(45deg)
    transform: rotate(45deg)

  .checkmark--hoverLabel
    border: 1px solid #999999
</style>
