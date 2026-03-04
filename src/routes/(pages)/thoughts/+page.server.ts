import { getPosts } from "$lib/server/posts";

export async function load() {
  return await getPosts();
}
