import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const dir = path.join(process.cwd(), "content", "blog");
const countFlag = args.find((arg) => arg.startsWith("--count="));
const count = Number(countFlag ? countFlag.slice("--count=".length) : 100);

function removeSamples() {
  if (!fs.existsSync(dir)) return 0;
  let removed = 0;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith("zz-sample-") && name.endsWith(".mdx")) {
      fs.unlinkSync(path.join(dir, name));
      removed += 1;
    }
  }
  return removed;
}

if (args.includes("--clean")) {
  console.log(`removed ${removeSamples()} sample posts`);
  process.exit(0);
}

fs.mkdirSync(dir, { recursive: true });
const categories = ["House Washing", "Gutter Cleaning", "Window Cleaning", "Roof Washing"];
const tags = ["measurement", "triangle", "upkeep"];

for (let index = 1; index <= count; index += 1) {
  const slug = `zz-sample-${String(index).padStart(3, "0")}`;
  const day = String(((index - 1) % 28) + 1).padStart(2, "0");
  const month = String((index % 12) + 1).padStart(2, "0");
  const category = categories[index % categories.length];
  const file = `---
title: "Scale sample ${String(index).padStart(3, "0")} for build measurement"
description: "Throwaway local post used to measure build time and index weight. Not a Wolf Pack Wash article."
date: "2020-${month}-${day}"
updated: "2020-${month}-${day}"
slug: ${slug}
category: "${category}"
tags:
  - ${tags[index % tags.length]}
  - sample
cover: brand
coverAlt: "Wolf Pack Wash emblem used as a stand-in cover."
author: Wolf Pack Wash
draft: false
---

## First section

This file exists only so a local build can time a larger blog. It is not for publication and it does not describe a real job.

## Second section

The index should render one page of cards. The body of this sample must not show up on /blog.

## Third section

Delete the set with \`node scripts/sample-posts.mjs --clean\`.
`;
  fs.writeFileSync(path.join(dir, `${slug}.mdx`), file);
}

console.log(`wrote ${count} sample posts in content/blog`);
console.log("They are gitignored. Remove them with: node scripts/sample-posts.mjs --clean");
