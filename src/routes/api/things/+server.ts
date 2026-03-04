import { json } from "@sveltejs/kit";
import { getThings } from "$lib/server/things";

export async function GET() {
  const things = await getThings();
  return json(things, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
