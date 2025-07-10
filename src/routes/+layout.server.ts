export async function load({ cookies }) {
  const theme = cookies.get("theme") ?? "light";
  return { theme };
}
