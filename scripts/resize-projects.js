const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projects = [
  { src: 'resume-ai/pic1.png', dest: 'resume-ai-thumb.png' },
  { src: 'portfolio-sites/pic1.png', dest: 'portfolio-sites-thumb.png' },
  { src: 'burg/pic1.png', dest: 'burg-thumb.png' },
  { src: 'saasforge/pic1.png', dest: 'saasforge-thumb.png' },
  { src: 'cleanzo/thumbnail.png', dest: 'cleanzo-thumb.png' },
  { src: 'mint-care-dentistry/pic1.png', dest: 'mint-care-dentistry-thumb.png' }
];

const publicDir = path.join(__dirname, '../public');
const targetDir = path.join(publicDir, 'images/related');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function resizeProjects() {
  console.log('--- Starting Precision Resizing (1600x1000) ---');
  
  for (const project of projects) {
    const inputPath = path.join(publicDir, project.src);
    const outputPath = path.join(targetDir, project.dest);

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .resize(1600, 1000, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath);
        
        console.log(`[SUCCESS] ${project.src} -> ${project.dest}`);
      } catch (err) {
        console.error(`[ERROR] Processing ${project.src}:`, err.message);
      }
    } else {
      console.warn(`[SKIP] Source file not found: ${inputPath}`);
    }
  }

  console.log('--- Resizing Complete ---');
}

resizeProjects().catch(err => {
  console.error('Fatal error during execution:', err);
  process.exit(1);
});
