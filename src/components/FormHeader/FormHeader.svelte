<script lang="ts">
  import { CountryRequest } from "$lib/repositories/CountryRepository";

  import Select from "../Select/Select.svelte";
  import Input from "../Input/Input.svelte";
  import CheckBox from "../CheckBox/CheckBox.svelte";
  import Button from "../Button/Button.svelte";
  import Label from "../Label/Label.svelte";
  import { onMount } from "svelte";

  let countries: Array<{ name: string; value: string }> = [];

  let hoverLabel: boolean = false;

  const mouseEnterLabel = (): void => {
    hoverLabel = true;
  };

  const mouseLeaveLabel = (): void => {
    hoverLabel = false;
  };

  onMount(() => {
    let countriesRequest = new CountryRequest(
      "https://countriesnow.space/api/v0.1/countries",
      {},
    );

    countriesRequest.fetchCountries().then((response) => {
      countries = response?.data.data.map((country: any) => ({
        name: country.country,
        value: country.iso3,
      }));
    });
  });
</script>

<form method="POST" action="?/submitFormHeader"  class="formCard">
  <Select options={countries} name="country" />
  <div class="formCard__column">
    <Input type="email" name="email" placeholder="E-Mail" />
    <Button type="submit">Send</Button>
  </div>
  <div class="formCard__terms">
    <Label
      name="policy"
      on:mouseEnterLabel={mouseEnterLabel}
      on:mouseLeaveLabel={mouseLeaveLabel}
      formHeader
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
    @import '@/styles/variables/_color'
    @import '@/styles/variables/_spacing'
    @import '@/styles/variables/_media'

    .formCard
      display: flex
      flex-direction: column
      row-gap: $sp-sm 

    .formCard__column
      display: grid
      grid-template-columns: 2fr 1fr

    .formCard__policy
      color: $gray
      text-decoration: underline

    .formCard__policy:hover
      color: $white
      text-decoration: none

    .formCard__policy--hoverLabel
      color: $light-gray

    @media screen and (max-width: $tb-md)
      .formCard__terms
        display: flex
        justify-content: center
</style>
