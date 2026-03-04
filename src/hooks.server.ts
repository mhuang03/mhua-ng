import type { Handle } from "@sveltejs/kit";

const PRELOAD_FONTS = ["inter-latin-wght-normal", "buenard-latin-wght-normal"];

export const handle: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    preload: ({ type, path }) => {
      if (type === "font") {
        return PRELOAD_FONTS.some((name) => path.includes(name));
      }
      return type === "js" || type === "css";
    },
  });
};
