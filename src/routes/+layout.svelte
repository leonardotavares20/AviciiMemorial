<script>
  import Header from "../components/Header/Header.svelte";
  import "../styles/init.sass";
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>

  <footer></footer>
</div>

<style>
</style>
