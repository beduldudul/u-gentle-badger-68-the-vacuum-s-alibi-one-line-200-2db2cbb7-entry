import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "That spot was not missed — my sensors logged it as a protected dust-bunny habitat, and company policy forbids evicting tenants without 30 days' notice.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
