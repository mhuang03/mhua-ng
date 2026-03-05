export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

export const shuffle = <T>(array: T[]): T[] => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

export const filterByTagsAndSearch = <T extends { title: string; description: string; tags?: string[] }>(
  items: T[],
  selectedTags: Set<string>,
  searchQuery: string
): T[] => {
  const query = searchQuery.toLowerCase();
  return items.filter((item) => {
    const matchTags =
      selectedTags.size === 0 || Array.from(selectedTags).every((tag) => item.tags?.includes(tag));
    const matchSearch =
      item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    return matchTags && matchSearch;
  });
};

// Svelte action: adds skeleton class to all <img> children, removes on load
export function skeletonImages(node: HTMLElement) {
  const imgs = node.querySelectorAll<HTMLImageElement>("img");

  const onLoad = (e: Event) => {
    (e.currentTarget as HTMLElement).classList.remove("skeleton");
  };

  imgs.forEach((img) => {
    if (img.complete) {
      img.classList.remove("skeleton");
    } else {
      img.addEventListener("load", onLoad);
    }
  });

  return {
    destroy() {
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    },
  };
}
