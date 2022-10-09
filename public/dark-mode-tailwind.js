// dark-mode-tailwind.js
// function detectDarkMode() {
//   if (!globalThis.localStorage) {
//     return;
//   }

//   if (
//     globalThis.localStorage.theme === "dark" ||
//     (!("theme" in globalThis.localStorage) &&
//       globalThis.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     globalThis.document.documentElement.classList.add("dark");

//     globalThis.localStorage.theme = "dark"
//   } else {
//     globalThis.document.documentElement.classList.remove("dark");
//     globalThis.localStorage.theme = "light"
//   }
// }

// // Call our detection function as well
// detectDarkMode();