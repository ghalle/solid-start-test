import { json } from "solid-start/server";

export function get(
  { request }: { request: Request },
  params: Record<string, string>
) {
  const data = { id: params["id"] };
  return json(data);
  // or
  //   return new Response(JSON.stringify(data), {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
}
