export async function load({ cookies }) {
  const theme = cookies.get("theme") ?? "nord";
  return { theme };
}
