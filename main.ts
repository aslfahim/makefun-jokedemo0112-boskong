import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My agent fixed the demo bug in 8 seconds, then burned $47 of tokens explaining to the room how clever the fix was.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
