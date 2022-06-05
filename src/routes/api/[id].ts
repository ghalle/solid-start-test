import argon2 from "argon2";

export async function get(ctx, params) {
  return new Response(await argon2.hash(params["id"]));
}
