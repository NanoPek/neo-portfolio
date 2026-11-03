// Generates the favicon, app icons, OG image and the Gena.co card image from the
// theme tokens and src/assets/Face.svg, so they never drift from the site.
// Text is drawn as vector paths from the repo's Outfit font, so the output is the
// same on every OS (sharp's text renderer ignores custom fonts on macOS).
// Run: npm run assets
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import * as fontkit from 'fontkit';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const path = (p) => fileURLToPath(new URL(p, root));
const outfit = fontkit.openSync(path('src/assets/fonts/Outfit-VariableFont_wght.ttf'));

// Keep in sync with tailwind.config.js
const paper = '#F6F5F8';
const ink = '#190B28';
const accent = '#004E89';
const onAccentSecondary = '#C7D8EA';
const fgSecondary = '#4A4453';
const fgMuted = '#6B6575';

const faceSvg = await readFile(path('src/assets/Face.svg'), 'utf8');
const faceInner = faceSvg
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replace(/fill="[^"]*"/g, '');

/** One line of Outfit text as an SVG path. `anchor` is 'start' or 'middle'; y is the baseline. */
function text(str, {
  size, weight = 400, color, x, y, anchor = 'start',
}) {
  const font = outfit.getVariation({ wght: weight });
  const run = font.layout(str);
  const scale = size / font.unitsPerEm;
  const width = run.positions.reduce((sum, p) => sum + p.xAdvance, 0) * scale;
  let pen = anchor === 'middle' ? x - width / 2 : x;
  const d = run.glyphs.map((glyph, i) => {
    const position = run.positions[i];
    const glyphPath = glyph.path
      .scale(scale, -scale)
      .translate(pen + position.xOffset * scale, y - position.yOffset * scale)
      .toSVG();
    pen += position.xAdvance * scale;
    return glyphPath;
  }).join('');
  return `<path fill="${color}" d="${d}"/>`;
}

/** Face mark in one color, centered in a square tile. */
function tile(size, radius) {
  const scale = (size * 0.62) / 46;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="${accent}"/>
  <g transform="translate(${(size - 46 * scale) / 2} ${(size - 31 * scale) / 2 + size * 0.02}) scale(${scale})" fill="${paper}">${faceInner}</g>
</svg>`;
}

const png = (svg, file) => sharp(Buffer.from(svg)).png().toFile(path(file));

// Favicons and app icons: paper face on the accent tile
await writeFile(path('public/favicon.svg'), tile(64, 14));
await png(tile(192, 40), 'public/logo192.png');
await png(tile(512, 108), 'public/logo512.png');
await png(tile(180, 0), 'public/apple-touch-icon.png');

// favicon.ico: one 32px PNG-encoded entry, which every current browser reads
const ico32 = await sharp(Buffer.from(tile(32, 7))).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(1, 4); // one image
icoHeader.writeUInt8(32, 6); // width
icoHeader.writeUInt8(32, 7); // height
icoHeader.writeUInt16LE(1, 10); // color planes
icoHeader.writeUInt16LE(32, 12); // bits per pixel
icoHeader.writeUInt32LE(ico32.length, 14);
icoHeader.writeUInt32LE(22, 18); // data offset
await writeFile(path('public/favicon.ico'), Buffer.concat([icoHeader, ico32]));

// OG image, 1200x630: name and role on paper, the face on the accent panel
await png(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${paper}"/>
  <rect x="780" width="420" height="630" fill="${accent}"/>
  <rect x="780" width="6" height="630" fill="${ink}"/>
  <g transform="translate(880 240) scale(4.8)" fill="${paper}">${faceInner}</g>
  ${text('Jérémie Carrez', { size: 80, weight: 500, color: ink, x: 80, y: 268 })}
  ${text('Mobile software engineer', { size: 44, color: fgSecondary, x: 80, y: 340 })}
  ${text('iOS and Android, Kotlin Multiplatform', { size: 32, color: fgMuted, x: 80, y: 396 })}
  ${text('jecarrez.vercel.app', { size: 30, weight: 500, color: accent, x: 80, y: 530 })}
</svg>`, 'public/og.png');

// Gena.co card image: the company and product name on ink, no claims baked in
await png(`<svg xmlns="http://www.w3.org/2000/svg" width="1848" height="1300">
  <rect width="1848" height="1300" fill="${ink}"/>
  ${text('Gena.co', { size: 240, weight: 500, color: paper, x: 924, y: 680, anchor: 'middle' })}
  ${text('GenaSQL', { size: 96, color: onAccentSecondary, x: 924, y: 820, anchor: 'middle' })}
</svg>`, 'src/assets/WorkBoxImages/gena.png');

console.log('Generated favicon.svg, favicon.ico, apple-touch-icon.png, logo192/512.png, og.png and gena.png');
