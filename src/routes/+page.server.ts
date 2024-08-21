// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;
import { redirect } from "@sveltejs/kit";

export const load = async ({ url }) => {
  return {
    status: 302,
    redirect: `${url.origin}/home`,
  };
};

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
};
