export async function load({ fetch }) {
  const response = await fetch("/api/thoughts");
  const posts = await response.json();
  return posts;
}
