import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width = 1000, quality = 80 } = options;
  if (!fs.existsSync(inputPath)) {
    console.log(`File not found: ${inputPath}`);
    return;
  }
  const beforeSize = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(outputPath);
  const afterSize = fs.statSync(outputPath).size;
  console.log(`Optimized ${path.basename(inputPath)}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`);
}

async function run() {
  const images = [
    {
      input: 'src/assets/images/myPicture/ProfileImage.webp',
      output: 'src/assets/images/myPicture/profile-optimized.webp',
      width: 600,
      quality: 82,
    },
    {
      input: 'src/assets/images/projectImage/enaya/enaya.png',
      output: 'src/assets/images/projectImage/enaya/enaya.webp',
      width: 900,
      quality: 80,
    },
    {
      input: 'src/assets/images/projectImage/Weather-App/Weather.png',
      output: 'src/assets/images/projectImage/Weather-App/Weather.webp',
      width: 900,
      quality: 80,
    },
    {
      input: 'src/assets/images/projectImage/realestate/realstate.png',
      output: 'src/assets/images/projectImage/realestate/realstate.webp',
      width: 900,
      quality: 80,
    },
    {
      input: 'src/assets/images/projectImage/ToDoApp/ToDoApp (1).png',
      output: 'src/assets/images/projectImage/ToDoApp/ToDoApp.webp',
      width: 900,
      quality: 80,
    },
    {
      input: 'src/assets/images/logo/logo-full3.webp',
      output: 'src/assets/images/logo/logo-optimized.webp',
      width: 200,
      quality: 85,
    }
  ];

  for (const img of images) {
    try {
      await optimizeImage(img.input, img.output, { width: img.width, quality: img.quality });
    } catch (e) {
      console.error(`Error optimizing ${img.input}:`, e.message);
    }
  }
}

run();
