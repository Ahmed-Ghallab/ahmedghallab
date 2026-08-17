import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectImagesDir = path.resolve('src/assets/images/projectImage');

async function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (entry.name.endsWith('.png') || entry.name.endsWith('.jpg') || entry.name.endsWith('.jpeg')) {
      const parsed = path.parse(fullPath);
      const outWebp = path.join(parsed.dir, `${parsed.name}.webp`);
      console.log(`Converting ${entry.name} -> ${parsed.name}.webp ...`);
      
      const metadata = await sharp(fullPath).metadata();
      let pipeline = sharp(fullPath);
      if (metadata.width > 1200) {
        pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
      }
      
      await pipeline.webp({ quality: 82, effort: 4 }).toFile(outWebp);
      const statOriginal = fs.statSync(fullPath);
      const statWebp = fs.statSync(outWebp);
      console.log(`  Done: ${(statOriginal.size / 1024).toFixed(1)} KB -> ${(statWebp.size / 1024).toFixed(1)} KB`);
    }
  }
}

async function run() {
  console.log("Optimizing all project images to WebP...");
  await processDir(projectImagesDir);
  console.log("Optimization complete!");
}

run().catch(console.error);
