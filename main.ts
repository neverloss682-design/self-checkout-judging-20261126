// The Self-Checkout Is Judging You — one-liner entry generator.
//
// Writes a single funny remark in the voice of a smug self-checkout
// machine to <output>/entry.txt. The machine scans a basket of fourteen
// yoghurts and one sad birthday candle, and its beep turns out not to be
// an accusation at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a petty machine's-eye view of the basket, with a reversal —
// the beep everyone expects to mean "thief" is the machine insisting
// somebody witness this dinner.
const ENTRY =
  "Fourteen yoghurts and one sad birthday candle. I didn't beep because I thought you were stealing — I beeped because this dinner deserves a witness.";

// Output directory: MAKEFUN_OUTPUT_DIR when set, otherwise the grader's
// absolute default /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
