module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // safeList: [
    //   /^bg-/,
    //   /^to-/,
    //   /^from-/
    // ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}