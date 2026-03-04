import { getThings } from "$lib/server/things";

export async function load() {
  return await getThings();
}
