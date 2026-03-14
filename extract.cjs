const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(framesDir)){
    fs.mkdirSync(framesDir, { recursive: true });
}

try {
    // Extract high-quality frames from the new pre-optimized 720p source without aggressive scaling or compression.
    const cmd = `"${ffmpeg}" -i "assets/vbo - 720.mp4" -vf fps=24 -q:v 2 "${path.join(framesDir, 'frame_%04d.jpg')}"`;
    console.log('Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });
    console.log('Extracted frames to ' + framesDir);
} catch (err) {
    console.error('Error during extraction', err.message);
}
