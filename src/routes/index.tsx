import server from "solid-start/server";
import "./index.css";

export default function Index() {
  server(async () => {
    console.log("test");
  })();
  return <div>Index</div>;
}
