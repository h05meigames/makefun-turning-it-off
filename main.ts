// Have You Tried Turning It Off? — make.fun entry
// Writes one funny line from a hopeless tech support agent to /output/entry.txt.
// No network, no input, no secrets: the line is a constant in this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: the agent "finds" the problem (the machine is on), prescribes the
// classic reboot, and cheerfully promises to escalate to someone who will say
// the exact same thing — only slower. Cheerful uselessness, the customer is
// never the butt of it, and the classic line gets a fresh twist.
const ENTRY =
  "Good news — I found the problem: it's on. Turn it off, turn it back on, and if that fails I'll escalate you to someone who'll say the same thing, slower.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
