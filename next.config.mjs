/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['igadgetdoc.us'], // ✅ allow external image source
      },
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//     domains: ['igadgetdoc.us'],
//   },
//   trailingSlash: true,
// };

// export default nextConfig;
