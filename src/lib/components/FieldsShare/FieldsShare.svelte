<script lang="ts">
  import Input from "../Input/Input.svelte";
  import Button from "../Button/Button.svelte";
  import FieldSet from "../FielSet/FieldSet.svelte";
  import Label from "../Label/Label.svelte";
  import TextArea from "../TextArea/TextArea.svelte";
  import { setOpacityBackground } from "$lib/assets/animations/form/shareForm";
  import { setPreview, resetFileInput } from "$lib/helpers/form";

  export let timeline: gsap.core.Timeline;

  let image: HTMLImageElement;
  let inputFile: HTMLInputElement;
  let textarea: HTMLTextAreaElement;
  let showPreviewImage: boolean = false;
  let maxCharacters: number = 500;

  function handleMaxCharacters() {
    maxCharacters = 500 - textarea.value.length;
  }

  function hideForm(): void {
    timeline.reverse();
    setOpacityBackground(1);
  }

  function handlePreviewImage(event: Event): void {
    showPreviewImage = setPreview(event, image);
  }

  function handleResetFile(): void {
    showPreviewImage = resetFileInput(inputFile, image);
  }
</script>

<Button type="button" on:clickButton={hideForm} closeForm>Close</Button>
<FieldSet shareForm>
  <Label name="story" shareStory>Write your story of love here:</Label>
  <TextArea
    name="story"
    id="story"
    rows={10}
    maxlength={500}
    on:inputChange={handleMaxCharacters}
    bind:input={textarea}
    shareForm
  />
  <p class="share-form__characters">
    {maxCharacters} of 500 Character(s) left
  </p>
</FieldSet>
<FieldSet shareForm>
  <Label name="name" shareName>Name</Label>
  <Input placeholder="Your Name" type="text" name="name" white />
</FieldSet>
<FieldSet shareForm>
  <p class="share-form__file-alert">
    Your images must be .jpg, .gif, or .png and max 3MB
  </p>
  <img
    alt=""
    bind:this={image}
    id="share-form__file-preview"
    class="share-form__file-preview"
    class:share-form__file-preview--hidden={!showPreviewImage}
  />
  {#if !showPreviewImage}
    <Label name="file" shareFile>Select File</Label>
  {:else}
    <Button
      id="share-form__reset-file"
      type="button"
      on:clickButton={handleResetFile}
      cancelFile>Cancel</Button
    >
  {/if}
  <Input
    type="file"
    name="file"
    bind:input={inputFile}
    on:change={handlePreviewImage}
    fileInput
  />
</FieldSet>
<div class="share-form__recaptcha">Recaptcha</div>
<p class="share-form__privacy-policy">
  By posting a comment you agree to our privacy policy.
</p>
<Button type="submit" submitForm>Submit</Button>

<style lang="sass">
  .share-form__characters
    font-size: 0.7rem
    align-self: flex-start

  .share-form__file-alert
    font-size: 0.9rem
    font-style: italic
    margin-top: 5px
    color: gray

  .share-form__file-preview
    width: 30%
    margin-top: 10px
    height: 30%

  .share-form__file-preview--hidden
    visibility: hidden

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
