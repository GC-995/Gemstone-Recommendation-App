import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = process.cwd();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

function resolvePath(url) {
  const requested = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const normalized = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const path = join(root, normalized === "/" ? "index.html" : normalized);
  return existsSync(path) && statSync(path).isDirectory() ? join(path, "index.html") : path;
}

createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");

  if (!existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Gemstone Recommendation App running at http://localhost:${port}`);
});
