<script lang="ts">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import { createShareSmooth, createTimelineForm } from "./timeline";

  interface Timeline {
    play: () => void;
    reverse: () => void;
  }

  let timeline: Timeline;
  let animationBackgroundComplete = false;

  function handleBackground(opacity: number) {
    gsap.to("#share-form__background", {
      opacity: opacity,
      duration: 0.3,
    });
  }

  function showForm() {
    if (!animationBackgroundComplete) return;
    timeline.play();
    handleBackground(0);
  }

  function hideForm() {
    timeline.reverse();
    handleBackground(1);
  }

  function smoothScroll() {
    createShareSmooth(() => {
      animationBackgroundComplete = true;
    });
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    smoothScroll();

    timeline = createTimelineForm();
  });
</script>

<div class="share-form">
  <img
    id="share-form__background"
    class="share-container__background"
    src="/world/worldmap.jpeg"
    alt="World Map"
  />
  <div class="share-form__container">
    <button
      id="share-form__button"
      on:click={showForm}
      class="share-form__button"
      type="button"
    >
      Share your memories of Avicii
    </button>
    <form id="share-form__form" class="share-form__form">
      <button on:click={hideForm} type="button" class="share-form__button-close"
        >Close</button
      >
      <fieldset class="share-form__fieldset">
        <label class="share-form__label-story" for="story"
          >Write your story of love here:</label
        >
        <textarea class="share-form__text_area-story" id="story" rows="10"
        ></textarea>
      </fieldset>
      <fieldset class="share-form__fieldset">
        <label class="share-form__label-name" for="name">Name</label>
        <input
          placeholder="Your Name"
          class="share-form__input-name"
          type="text"
          id="name"
        />
      </fieldset>
      <fieldset class="share-form__fieldset">
        <p class="share-form__file-alert">
          Your images must be .jpg, .gif, or .png and max 3MB
        </p>
        <label for="file">Select File</label>
        <input type="file" id="file" />
      </fieldset>
    </form>
  </div>
</div>

<style lang="sass">
  .share-form
    width: 100%
    background: black
    justify-content: center
    color: white

  .share-container__background
    width: 100%
    z-index: 1
    opacity: 0

  .share-form__container
    width: 100%
    position: absolute
    display: grid
    justify-items: center
    bottom: 50%
    transform: translateY(50%)

  .share-form__button, .share-form__button-close
    background: black
    color: white
    font-family: 'Lato', sans-serif
    text-transform: uppercase
    border: 2px solid #434343
    letter-spacing: 2px
    font-weight: 600
    transform: translateY(30px)
    cursor: pointer
    transition: 0.2s
    overflow: hidden
    opacity: 0
    width: 417px
    height: 72px
    font-size: 1.1rem
    border-color: white
    z-index: 10
    margin-bottom: 10px

  .share-form__button-close
    width: 150px
    opacity: 1
    transform: translateY(0px)
    margin-bottom: 50px

  .share-form__form
    width: 500px
    // height: calc( 95vh - 60px )
    height: 0
    overflow: hidden
    display: flex
    flex-direction: column
    // justify-content: center
    align-items: center

  .share-form__fieldset
    display: flex
    gap: 10px
    margin-bottom: 20px
    flex-direction: column
    text-align: center

  //Story

  .share-form__label-story
    font-weight: 900
    color: white
    letter-spacing: 2px
    margin-bottom: 10px

  .share-form__text_area-story
    width: 408px
    resize: none 
    height: 200px
    border: 0
    border-radius: 0
    padding: 20px
    font-size: 1rem

  //Name

  .share-form__label-name
    width: 0px
    height: 0px
    overflow: hidden
    margin-top: 10px

  .share-form__input-name
    width: 408px
    height: 52px
    border: 0
    padding: 0px 20px

  .share-form__input-name::placeholder
    color: gray
    font-size: 1rem

  //File

  .share-form__file-alert
    font-size: 0.9rem
    font-style: italic
    color: gray

</style>
