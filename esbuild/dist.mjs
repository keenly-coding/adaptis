import * as esbuild from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "glob";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let files = await glob(path.join(__dirname, "../src/dist/**/*.ts"), {
  // ignore: path.join(__dirname, "../src/dist/**/*.bundle.ts"),
});

console.log(
`📦️ Create adapter distributed files
===================================`);

let result = await esbuild.build({
  entryPoints: files,
  bundle: true,
  outdir: "dist",
  outbase: path.join(__dirname, "../src/dist/"),
  format: "esm",
  lineLimit: 80,
  keepNames: false,
  minify: true,
  sourcemap: true,
  metafile: true,
  logLevel: "info",
});

console.log(
  await esbuild.analyzeMetafile(result.metafile, {
    verbose: true,
  })
);

// files = await glob(path.join(__dirname, "../src/dist/**/*.bundle.ts"));

// console.log(
// `📦️ Create library bundle files
// =======================================`);

// result = await esbuild.build({
//   entryPoints: files,
//   bundle: true,
//   outdir: "dist",
//   outbase: path.join(__dirname, "../src/dist/"),
//   format: "esm",
//   lineLimit: 80,
//   keepNames: false,
//   minify: true,
//   sourcemap: true,
//   metafile: true,
//   logLevel: "info",
// });

// console.log(
//   await esbuild.analyzeMetafile(result.metafile, {
//     verbose: true,
//   })
// );
