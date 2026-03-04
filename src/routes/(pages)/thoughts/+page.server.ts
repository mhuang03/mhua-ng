import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch("/api/thoughts");
  const posts = await response.json();
  return posts;
};
