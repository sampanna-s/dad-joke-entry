import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my suitcase there would be no vacation this year. Now I'm dealing with emotional baggage.";

// Gate mirror: UTF-8 text, 1-200 characters, not only white space.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke fails the gate: ${JOKE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, `.entry.txt.tmp-${process.pid}`);
writeFileSync(tmp, JOKE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
