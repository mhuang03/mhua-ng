import { json } from "@sveltejs/kit";
import type { Thing } from "$lib/types";

async function getThings() {
  let things: Thing[] = [];
  let tags: string[] = [];

  const paths = import.meta.glob("$lib/things/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const thing = file.metadata as Thing;

      things.push(thing);
      if (thing.tags) {
        tags = tags.concat(thing.tags);
      }
    }
  }

  things = things.sort((first, second) => first.title.localeCompare(second.title));
  tags = Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));

  return {
    things,
    tags,
  };
}

export async function GET() {
  const things = await getThings();
  return json(things);
}
