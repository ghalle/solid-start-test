import { createResource } from "solid-js";
import { isServer } from "solid-js/web";

function myFetch(url: string, init?: RequestInit) {
  const fetchUrl = isServer ? new URL(url, "http://127.0.0.1:3000") : url;
  return fetch(fetchUrl, init);
}

export default function Index() {
  const [data] = createResource(async () => {
    const response = await myFetch("/api/1234");
    const data = await response.json();
    return JSON.stringify(data);
  });
  return <pre>{data}</pre>;
}
