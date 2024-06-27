<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { countries } from "../../assets/coutry";

  import Select from "../Select/Select.svelte";
  import Input from "../Input/Input.svelte";
  import CheckBox from "../CheckBox/CheckBox.svelte";
  import Button from "../Button/Button.svelte";
  import Label from "../Label/Label.svelte";

  let hoverLabel = false;

  interface EventOption {
    detail: string;
  }

  const getOption = (event: EventOption) => {
    console.log(event.detail);
  };

  const mouseEnterLabel = () => {
    hoverLabel = true;
  };

  const mouseLeaveLabel = () => {
    hoverLabel = false;
  };
</script>

<form action="" class="formCard">
  <Select name="country" on:changeOption={getOption} {countries} />
  <div class="formCard__column">
    <Input type="email" name="email" placeholder="E-Mail" />
    <Button type="submit">Send</Button>
  </div>
  <div>
    <Label
      name="policy"
      on:mouseEnterLabel={mouseEnterLabel}
      on:mouseLeaveLabel={mouseLeaveLabel}
    >
      <CheckBox {hoverLabel} name="policy" />
      <p>
        I accept the <a
          class="formCard__policy"
          class:formCard__policy--hoverLabel={hoverLabel}
          href="/">privacy policy.</a
        >
      </p>
    </Label>
  </div>
</form>

<style lang="sass">
    .formCard
      display: grid
      row-gap: 8px 

    .formCard__column
      display: grid
      grid-template-columns: 2fr 1fr

    .formCard__policy
      color: #434343
      text-decoration: underline

    .formCard__policy:hover
      color: white
      text-decoration: none

    .formCard__policy--hoverLabel
      color: #999999
</style>
