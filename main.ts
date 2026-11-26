import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// The program writes exactly one funny line (max 140 chars) to /output/entry.txt.
// The joke: a plant intervention, with the watering compared to replying to texts.
const LINE =
  "My plants staged an intervention: they said I water them the way I answer texts — enthusiastically, three weeks late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
