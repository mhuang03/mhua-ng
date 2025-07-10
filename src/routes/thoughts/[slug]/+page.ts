import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`$lib/thoughts/${params.slug}.md`);
    // console.log(post);
    return {
      content: post.default,
      metadata: post.metadata,
    };
  } catch (e) {
    error(404);
  }
};
