export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const shuffle = (array: any[]) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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
