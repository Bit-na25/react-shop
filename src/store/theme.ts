import { atom } from "recoil";

const THEME_KEY = "theme";

export const themeState = atom<"light" | "dark">({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "dark" || saved === "light") {
        setSelf(saved);
        document.documentElement.setAttribute("data-theme", saved);
      }

      onSet((newTheme) => {
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      });
    },
  ],
});
