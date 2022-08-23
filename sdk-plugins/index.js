// const contentstack = require("contentstack");

// const Stack = process.env.CONTENTSTACK_API && process.env.CONTENTSTACK_DELIVERY_TOKEN && process.env.CONTENTSTACK_ENVIRONMENT
//   ? contentstack.Stack({
//     api_key: process.env.CONTENTSTACK_API,
//     delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
//     environment: process.env.CONTENTSTACK_ENVIRONMENT,
//     region: process.env.REGION ? process.env.REGION : "eu",
//   }) : "";

// export default {
//   getEntryWithRef(ctUid, ref, locale) {
//     return new Promise((resolve, reject) => {
//       Stack.ContentType(ctUid)
//         .Query()
//         .language(locale)
//         .includeReference(ref)
//         .includeOwner()
//         .toJSON()
//         .find()
//         .then(
//           (result) => {
//             resolve(result);
//           },
//           (error) => {
//             reject(error);
//           },
//         );
//     });
//   },
//   getEntry(ctUid, locale) {
//     return new Promise((resolve, reject) => {
//       Stack.ContentType(ctUid)
//         .Query()
//         .language(locale)
//         .toJSON()
//         .find()
//         .then(
//           (result) => {
//             resolve(result);
//           },
//           (error) => {
//             reject(error);
//           },
//         );
//     });
//   },
//   getSpecificEntry(ctUid, entryUrl, locale) {
//     return new Promise((resolve, reject) => {
//       const blogQuery = Stack.ContentType(ctUid)
//         .Query()
//         .language(locale)
//         .toJSON();
//       const data = blogQuery.where("url", `${entryUrl}`).find();
//       data.then(
//         (result) => {
//           resolve(result[0]);
//         },
//         (error) => {
//           reject(error);
//         },
//       );
//     });
//   },
//   getSpecificEntryWithRef(ctUid, entryUrl, ref, locale) {
//     return new Promise((resolve, reject) => {
//       const blogQuery = Stack.ContentType(ctUid)
//         .Query()
//         .language(locale)
//         .includeReference(ref)
//         .toJSON();
//       const data = blogQuery.where("url", `${entryUrl}`).find();
//       data.then(
//         (result) => {
//           resolve(result[0]);
//         },
//         (error) => {
//           reject(error);
//         },
//       );
//     });
//   },
// };

