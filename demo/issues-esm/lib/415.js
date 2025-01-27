import fs from "node:fs";
// import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import desm from "desm";
import { parse } from "csv-parse";
import { stringify } from "csv-stringify";

const dirname = desm(import.meta.url);

await pipeline(
  fs.createReadStream(`${dirname}/415.csv`),
  // Readable.fromWeb(await fetch('https://download.geonames.org/export/dump/countryInfo.txt').then(res => res.body)),
  parse({
    comment: "#",
    delimiter: "\t",
    relax_column_count: true,
  }),
  stringify({ delimiter: "|" }),
  process.stdout
);
