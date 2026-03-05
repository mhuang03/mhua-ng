import type { Post } from "$lib/types";

export async function getThoughts() {
  let posts: Post[] = [];
  let tags: string[] = [];

  const paths = import.meta.glob("$lib/thoughts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;
      if (post.published === false) {
        continue; // skip unpublished posts
      }

      posts.push(post);
      if (post.tags) {
        tags = tags.concat(post.tags);
      }
    }
  }

  posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
  tags = Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));

  return {
    posts,
    tags,
  };
}
