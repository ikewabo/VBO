const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(framesDir)){
    fs.mkdirSync(framesDir, { recursive: true });
}

try {
    // Scale the 1440p video down to true 720p and use highly optimized WebP format for fast web delivery.
    const cmd = `"${ffmpeg}" -i "assets/vbo - 720.mp4" -vf "fps=24,scale=1280:720" -c:v libwebp -quality 60 "${path.join(framesDir, 'frame_%04d.webp')}"`;
    console.log('Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });
    console.log('Extracted frames to ' + framesDir);
} catch (err) {
    console.error('Error during extraction', err.message);
}
