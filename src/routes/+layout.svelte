<script>
  import "../app.css";
  import Header from "@/components/Header/Header.svelte";
  import TermsBox from "@/components/Terms/TermsBox.svelte";
  import { createSmoothScroll } from "$lib/assets/lenis/lenis";
  import { onMount } from "svelte";
  import "../styles/init.sass";

  onMount(() => {
    createSmoothScroll();
  });
</script>

<div class="app">
  <Header></Header>
  <TermsBox />

  <main>
    <slot></slot>
  </main>

  <footer id="footer" class="footer">
    This project was created for educational purposes only and as a fan project,
    I used it only as a study and practice to develop my programming skills. It
    is not an official project or endorsed by Avicii, Pophouse Entertainment
    Group AB or any affiliated entities. This is my the Repo of the project: <a
      class="footer__link-repo"
      href="https://github.com/leonardotavares20/AviciiMemorial"
      target="_blank">Repo</a
    >
  </footer>
</div>

<style lang="sass">
  .app
    margin: auto

  .footer 
    color: white
    text-align: center
    line-height: 25px
    text-transform: uppercase
    // padding: 30px 200px

  .footer__link-repo
    text-decoration: underline

  .footer__link-repo:hover 
    color: #8f8e8d
</style>
