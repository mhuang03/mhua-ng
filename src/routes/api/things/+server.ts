import { json } from "@sveltejs/kit";
import type { Thing } from "$lib/types";

async function getThings() {
  let things: Thing[] = [];

  const paths = import.meta.glob("$lib/things/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === "object" && "metadata" in file) {
      const thing = file.metadata as Thing;

      things.push(thing);
    }
  }

  things = things.sort((first, second) => first.title.localeCompare(second.title));

  return {
    things,
  };
}

export async function GET() {
  const things = await getThings();
  return json(things);
}
