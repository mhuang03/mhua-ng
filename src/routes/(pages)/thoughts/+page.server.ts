import { getThoughts } from "$lib/server/thoughts";

export async function load() {
  return await getThoughts();
}
