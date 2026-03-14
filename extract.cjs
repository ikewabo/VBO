const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(framesDir)){
    fs.mkdirSync(framesDir, { recursive: true });
}

try {
    // Increase fps to 24 for a smooth sequence, but drop resolution and increase compression for mobile performance.
    const cmd = `"${ffmpeg}" -i "assets/vbohero.mp4" -vf fps=24 -s 854x480 -q:v 12 "${path.join(framesDir, 'frame_%04d.jpg')}"`;
    console.log('Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });
    console.log('Extracted frames to ' + framesDir);
} catch (err) {
    console.error('Error during extraction', err.message);
}
