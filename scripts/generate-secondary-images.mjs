import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSecondImages() {
  // 1. Real Estate: crop lower half (Why Oryx / Mission / Features)
  const realEstateSrc = path.resolve('src/assets/images/projectImage/realestate/realstate.png');
  const realEstateOut = path.resolve('src/assets/images/projectImage/realestate/realstate-demo2.webp');
  const reMeta = await sharp(realEstateSrc).metadata();
  await sharp(realEstateSrc)
    .extract({ left: 0, top: Math.floor(reMeta.height * 0.45), width: reMeta.width, height: Math.floor(reMeta.height * 0.55) })
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(realEstateOut);
  console.log("Generated realstate-demo2.webp");

  // 2. Weather App: crop lower/detail forecast section
  const weatherSrc = path.resolve('src/assets/images/projectImage/Weather-App/Weather.png');
  const weatherOut = path.resolve('src/assets/images/projectImage/Weather-App/Weather-demo2.webp');
  const wMeta = await sharp(weatherSrc).metadata();
  await sharp(weatherSrc)
    .extract({ left: 0, top: Math.floor(wMeta.height * 0.3), width: wMeta.width, height: Math.floor(wMeta.height * 0.7) })
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(weatherOut);
  console.log("Generated Weather-demo2.webp");

  // 3. ToDoApp: detail view
  const todoSrc = path.resolve('src/assets/images/projectImage/ToDoApp/ToDoApp (1).png');
  const todoOut = path.resolve('src/assets/images/projectImage/ToDoApp/ToDoApp-demo2.webp');
  const tMeta = await sharp(todoSrc).metadata();
  await sharp(todoSrc)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(todoOut);
  console.log("Generated ToDoApp-demo2.webp");

  // 4. F&B Shop: secondary view
  const fbSrc = path.resolve('src/assets/images/projectImage/F&B Shop/F&B Shop-demo.png');
  const fbOut = path.resolve('src/assets/images/projectImage/F&B Shop/F&B Shop-demo2.webp');
  await sharp(fbSrc)
    .resize({ width: 1100, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(fbOut);
  console.log("Generated F&B Shop-demo2.webp");
}

generateSecondImages().catch(console.error);
