// module.exports = ({ env }) => ({
//   "users-permissions": {
//     config: {
//       jwt: {
//         expiresIn: "7d",
//       },
//       jwtSecret: "6L8rspWDoF1BCdNCtNV0FA==",
//       adminJwtSecret: "lOm9YKvmoxIIVbOc/6neRw==",
//       apiTokenSalt: "64RxhtQU3D0cR3l+GWO5fw==",
//     },
//   },
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
//   toolbar: {
//       items: [
//           "heading",
//           "|",
//           "bold",
//           "italic",
//           "link",
//           "alignment",
//           "|",
//           "undo",
//           "redo",
//       ],
//   },
// });


// path: ./config/plugins.js

module.exports = ({ env })=>({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
});
