export async function load({ fetch }) {
  const response = await fetch("/api/things");
  const things = await response.json();
  return things;
}
