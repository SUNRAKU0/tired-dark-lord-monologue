// Tired Dark Lord entry: writes a 100-word villain monologue to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The ravens arrive with the same tidings each morning, and the lord still pretends to be surprised.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Exactly 100 words: the villain never once says he is tired — the yawns hide in the kettle, the knee and the nap.
const text = 'Right. The hero comes at dawn, as always, sword first, questions later. I have kept this throne warm for 400 years, and the cushions reek of smoke. The magic kettle leaks since the war. The crown itches. It always itches. My ravens bring the same news: the west farms paid the grain tithe, the river witches want a bridge, my knee predicts rain. The prophecy says I fall at the seventh bell, so I wind the clock back each night. Listen, if you must slay me, do it before lunch. After lunch I nap, and the kingdom, frankly, runs itself.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text + '\n', 'utf8');
