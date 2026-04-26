import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/images/before-after");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const IMAGES = [
  {
    filename: "before-1.png",
    prompt:
      "An empty bare apartment balcony, plain concrete floor, simple metal railing, no plants or decorations whatsoever, urban city view in background, daytime, photorealistic",
  },
  {
    filename: "before-2.png",
    prompt:
      "A small neglected apartment balcony with grey tiled floor, iron railing, completely empty with no plants or furniture, overlooking city buildings, photorealistic",
  },
  {
    filename: "before-3.png",
    prompt:
      "A boring empty apartment balcony with plain floor, railing, no plants no furniture, dull urban view, overcast sky, photorealistic",
  },
  {
    filename: "after-1.png",
    prompt:
      "A beautiful apartment balcony transformed into a lush Mediterranean garden, terracotta pots with lavender rosemary and colorful geraniums lined along the railing, green climbing jasmine, warm golden hour light, photorealistic",
  },
  {
    filename: "after-2.png",
    prompt:
      "A thriving small apartment balcony garden oasis, potted herbs basil mint parsley, bougainvillea climbing the railing, colorful petunias in planter boxes, lush green leaves, Israeli Mediterranean climate, photorealistic",
  },
  {
    filename: "after-3.png",
    prompt:
      "A stunning apartment balcony garden with cherry tomato plants in pots, lavender and rosemary in terracotta planters, climbing passionflower on the railing, cozy green Mediterranean space, warm sunlight, photorealistic",
  },
];

async function main() {
  console.log(`Generating ${IMAGES.length} images with DALL-E 3...\n`);

  for (const img of IMAGES) {
    process.stdout.write(`→ ${img.filename} ... `);
    try {
      const res = await client.images.generate({
        model: "dall-e-3",
        prompt: img.prompt,
        n: 1,
        size: "1024x1024",
        quality: "standard",
        response_format: "b64_json",
      });
      const b64 = res.data?.[0]?.b64_json;
      if (!b64) throw new Error("No b64_json returned");
      const dest = path.join(OUT_DIR, img.filename);
      fs.writeFileSync(dest, Buffer.from(b64, "base64"));
      console.log("✓");
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`);
    }
  }

  console.log("\nDone! Images saved to public/images/before-after/");
}

main();
