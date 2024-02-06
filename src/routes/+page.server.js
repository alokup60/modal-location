// import { seoColl } from "$lib/db/database.js";

// export let load = async () => {
//   let seo = await seoColl.findOne({ name: "anshu" });
//   let seoData = JSON.stringify(seo.newdata);
//   console.log(seo.newdata, "ser");

//   return {
//     seoData,
//   };
// };

// export const actions = {
//   addSeo: async ({ request }) => {
//     const data = await request.formData();
//     const seoName = data.get("seoName");
//     console.log(seoName);
//     let user = await seoColl.updateOne(
//       {
//         name: "anshu",
//       },
//       { $push: { newdata: seoName } }
//     );
//     return { success: true };
//   },
// };
