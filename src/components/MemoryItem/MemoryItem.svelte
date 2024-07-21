<script lang="ts">
  export let from: string = "";
  export let date: string = "";
  export let message: string = "";
</script>

<li class="memory">
  <p class="memory__from"><strong>from {from}</strong></p>
  <p class="memory__message">{message}</p>
  <time datetime={date} class="memory__date">{date}</time>
</li>

<style lang="sass">
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_font'

    .memory
      text-align: center

    .memory__from
      font-size: $ft-sm-3x
      align-self: flex-start
    
    .memory__message
      line-height: $sp-md
      font-size: $ft-sm-3x
      margin: $sp-lg 0px
      align-self: flex-start

    .memory__date
      font-size: $ft-sm-1x
      color: $light-gray
</style>
