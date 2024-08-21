export const load = async ({ url }) => {
  return {
    status: 302,
    redirect: `${url.origin}/home`,
  };
};
