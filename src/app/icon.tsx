import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  const imagePath = join(process.cwd(), 'public', 'logos', 'wolfpack_wash_shield_transparent.png');
  const imageBuffer = readFileSync(imagePath);
  const imageBase64 = imageBuffer.toString('base64');
  const imageSrc = `data:image/png;base64,${imageBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d0f12',
        }}
      >
        <img src={imageSrc} width={440} height={440} alt="Wolf Pack Wash" />
      </div>
    ),
    size,
  );
}
