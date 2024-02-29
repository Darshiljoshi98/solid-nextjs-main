import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), 'public/Downlode', 'dummy.pdf'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="dummy.pdf"');
  headers.append('Content-Type', 'image/png');

  return new Response(buffer, {
    headers,
  });
}