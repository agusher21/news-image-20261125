# news-image-20261125 — Round 1 Entry

[![make.fun badge](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank badge](https://make.fun/badge/news-image-20261125/agusher21/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward badge](https://make.fun/badge/news-image-20261125/agusher21/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

This entry packs 25 stories from Wednesday 25 November 2026 into a single 1024×1024 broadsheet. The signature twist is a vertical UTC spine running down the left edge — a 24-hour rail with time markers — with three lead panels and ten cards hanging off it in strict UTC order so the page reads as the day unfolding top to bottom. A DATE CHECK box explicitly excludes 24 November news, and an "ALSO ON" section lists the remaining twelve stories.

## How It's Built

The repository contains only two runtime pieces: `entry.png` (the finished 1024×1024 image, 178 KB) and `main.ts`, a tiny Node 22 program that uses only the standard library. When executed, `main.ts` resolves `entry.png` relative to itself via `import.meta.url` and copies it byte-for-byte into the directory specified by `MAKEFUN_OUTPUT_DIR` (defaulting to `/output`). No generation, no transformation — the judge receives the exact same PNG bytes that sit in this repo. The copy is verified by comparing SHA-256 hashes.