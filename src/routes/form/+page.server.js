export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    return {
      user: username,

      sucess: true,
    };
  },
};
