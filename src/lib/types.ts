export type Post = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
  published: boolean;
};

export type Thing = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  postSlug?: string;
  visitURL?: string;
};
