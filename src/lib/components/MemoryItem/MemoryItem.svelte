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
    @import '../../../styles/variables/_color'

    .memory
      text-align: center

    .memory__from
      font-size: 14px
      align-self: flex-start
    
    .memory__message
      line-height: 16px
      font-size: 12px
      margin: 25px 0px
      align-self: flex-start

    .memory__date
      font-size: 10px
      color: $light-gray
</style>
