export type Post = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  renderMath: boolean;
  published: boolean;
  slug: string;
};

export type Thing = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  postSlug?: string;
  visitURL?: string;
};
