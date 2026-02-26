export default {
  future: {
    disableOpaqueColors: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  //  THIS IS THE FIX
  tailwindcss: {
    mode: 'aot', // disable oxide engine
  },
};
