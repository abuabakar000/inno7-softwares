const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const targetRootDir = path.join(publicDir, 'images/optimized');

const projectFolders = [
  'burg',
  'cleanzo',
  'saasforge',
  'resume-ai',
  'mint-care-dentistry',
  'portfolio-sites',
  'plumber',
  'dev-collab'
];

async function optimizeImages() {
  console.log('--- Starting Full Portfolio Optimization (WebP + Resizing) ---');

  for (const folder of projectFolders) {
    const folderPath = path.join(publicDir, folder);
    const targetFolderPath = path.join(targetRootDir, folder);

    if (!fs.existsSync(folderPath)) {
      console.warn(`[SKIP] Folder not found: ${folderPath}`);
      continue;
    }

    if (!fs.existsSync(targetFolderPath)) {
      fs.mkdirSync(targetFolderPath, { recursive: true });
    }

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg|jfif)$/i)) {
        const inputPath = path.join(folderPath, file);
        const outputFilename = file.replace(/\.[^/.]+$/, "") + ".webp";
        const outputPath = path.join(targetFolderPath, outputFilename);

        try {
          // Check if already exists and input hasn't changed (simplified check)
          if (!fs.existsSync(outputPath)) {
            await sharp(inputPath)
              .resize(1200, null, { // Max width 1200, maintain aspect ratio
                withoutEnlargement: true
              })
              .webp({ quality: 80 })
              .toFile(outputPath);
            console.log(`[OPTIMIZED] ${folder}/${file} -> ${folder}/${outputFilename}`);
          } else {
            console.log(`[EXIST] ${folder}/${outputFilename}`);
          }
        } catch (err) {
          console.error(`[ERROR] Processing ${folder}/${file}:`, err.message);
        }
      }
    }
  }

  console.log('--- Optimization Complete ---');
}

optimizeImages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
