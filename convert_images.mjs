import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'assets/HomeSection/various');
const files = fs.readdirSync(dir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const inputPath = path.join(dir, file);
    const outputName = path.basename(file, ext) + '.webp';
    const outputPath = path.join(dir, outputName);
    
    console.log(`Converting ${file} to ${outputName}...`);
    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      // fs.unlinkSync(inputPath); // remove original if desired, but let's keep or remove based on need. Let's keep for now and manually delete later.
      console.log(`Successfully converted ${file}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}
