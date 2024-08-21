import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types.js";

export const prerender = false;

export const actions = {
  async submitFormHeader({ request }) {
    const formData = await request.formData();
    console.log(formData);

    return redirect(302, "/");
  },

  async submitFormMemories({ request }) {
    const formData = await request.formData();
    console.log(formData);

    return redirect(302, "/");
  },
} satisfies Actions;
