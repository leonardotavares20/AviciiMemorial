<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import { createShareSmooth, createTimelineForm } from "./timeline";

  let image: HTMLImageElement;
  let inputFile: HTMLInputElement;
  let timeline: gsap.core.Timeline;
  let textarea: HTMLTextAreaElement;
  let showPreview: boolean = false;
  let maxCharacters: number = 500;
  let animationBackgroundComplete: boolean = false;

  function handleBackground(opacity: number): void {
    gsap.to("#share-form__background", {
      opacity: opacity,
      duration: 0.3,
    });
  }

  function handleMaxCharacters() {
    maxCharacters = 500 - textarea.value.length;
  }

  function showForm(): void {
    if (!animationBackgroundComplete) return;
    timeline.play();
    handleBackground(0);
  }

  function hideForm(): void {
    timeline.reverse();
    handleBackground(1);
  }

  function smoothScroll(): void {
    createShareSmooth(() => {
      animationBackgroundComplete = true;
    });
  }

  function setPreviewImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      showPreview = true;

      const reader = new FileReader();
      reader.onload = function (e) {
        image.setAttribute("src", e.target?.result as string);
      };
      reader.readAsDataURL(file);

      return;
    }

    showPreview = false;
  }

  function resetFileInput(): void {
    inputFile.value = "";
    showPreview = false;
    image.setAttribute("src", "");
  }

  onMount((): void => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    smoothScroll();

    timeline = createTimelineForm();
  });
</script>

<div id="share-form" class="share-form">
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
      <button
        on:click={hideForm}
        type="button"
        class="share-form__button-close"
      >
        Close
      </button>
      <fieldset class="share-form__fieldset">
        <label class="share-form__label-story" for="story">
          Write your story of love here:
        </label>
        <textarea
          maxlength="500"
          bind:this={textarea}
          on:input={handleMaxCharacters}
          class="share-form__text_area-story"
          id="story"
          rows="10"
        ></textarea>
        <p class="share-form__characters">
          {maxCharacters} of 500 Character(s) left
        </p>
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
        {#if showPreview}
          <img
            alt=""
            bind:this={image}
            class="share-form__file-preview"
            id="share-form__file-preview"
          />
          <button class="share-form__button-cancel" on:click={resetFileInput}
            >Cancel</button
          >
        {:else}
          <label class="share-form__file-label" for="file">Select File</label>
        {/if}
        <input
          bind:this={inputFile}
          on:change={setPreviewImage}
          class="share-form__file-input"
          type="file"
          id="file"
        />
      </fieldset>
      <div class="share-form__recaptcha">Recaptcha</div>
      <p class="share-form__privacy-policy">
        By posting a comment you agree to our privacy policy.
      </p>
      <button class="share-form__button-send" type="submit">Submit</button>
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
    transform: translateY(45%)

  .share-form__button, .share-form__button-close, .share-form__button-send
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
    width: 130px
    opacity: 1
    transform: translateY(0px)
    margin-bottom: 50px

  .share-form__button-send
    opacity: 1
    width: 110px
    transform: translateY(0px)
    height: 50px
    font-size: 0.9rem

  .share-form__form
    width: 500px
    height: 0
    overflow: hidden
    display: flex
    flex-direction: column
    align-items: center

  .share-form__fieldset
    display: flex
    gap: 10px
    justify-content: center
    margin-bottom: 20px
    align-items: center
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

  .share-form__characters
    font-size: 0.7rem
    align-self: flex-start

  //Name

  .share-form__label-name
    width: 0px
    height: 0px
    overflow: hidden

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
    margin-top: 5px
    color: gray

  .share-form__file-label
    width: 100%
    margin-top: 10px
    font-weight: 600
    cursor: pointer
    letter-spacing: 2px
    text-decoration: underline
    text-decoration-thickness: 1px
    text-underline-offset: 5px

  .share-form__file-input
    width: 0px
    height: 0px
    overflow: hidden

  .share-form__button-cancel
    background: transparent
    font-family: 'Lato', sans-serif
    letter-spacing: 2px
    text-decoration: underline
    border: 0
    color: white
    font-size: 1rem
    font-weight: 600
    text-decoration-thickness: 1px
    text-underline-offset: 5px

  .share-form__file-preview
    width: 30%
    margin-top: 10px
    height: 30%

  .share-form__recaptcha
    width: 300px
    height: 70px
    background: white
    display: flex
    justify-content: center
    align-items: center
    color: black
    margin-top: 15px
    margin-bottom: 30px

  .share-form__privacy-policy
    font-size: 12px
    font-style: italic
    margin-bottom: 40px
    color: grey
</style>
