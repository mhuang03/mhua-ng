import { json } from "@sveltejs/kit";
import { getPosts } from "$lib/server/posts";

export async function GET() {
  const posts = await getPosts();
  return json(posts, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
