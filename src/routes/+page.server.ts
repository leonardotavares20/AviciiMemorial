import type { Actions } from "./$types.js";
import { schemaFormHeader } from "$lib/helpers/schemas.js";

export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  // submitFormMemories: async ({ request }) => {
  //   // const formData = await request.formData();

  //   return redirect(302, "/");
  // },

  submitFormHeader: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    console.log(formData);

    try {
      const result = schemaFormHeader.parse(formData);

      return {
        formHeader: {
          result,
        },
      };
    } catch (e) {
      const { fieldErrors } = e.flatten();

      const { email, country, policy } = formData;

      return {
        formHeader: {
          fieldErrors,
          formData: { email, country, policy },
        },
      };
    }
  },
} satisfies Actions;
