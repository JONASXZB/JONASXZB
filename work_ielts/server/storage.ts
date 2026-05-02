import fs from "node:fs/promises";
import path from "node:path";

const uploadsDir = path.resolve(process.cwd(), "uploads");

async function ensureUploadsDir() {
  await fs.mkdir(uploadsDir, { recursive: true });
}

function safeKey(key: string) {
  return key.replace(/^\/+/, "").replace(/\.\./g, "_");
}

export async function storagePut(
  key: string,
  body: Buffer | Uint8Array | string,
  _contentType?: string
): Promise<{ key: string; url: string }> {
  await ensureUploadsDir();
  const relKey = safeKey(key);
  const fullPath = path.join(uploadsDir, relKey);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, body);
  return { key: relKey, url: `/uploads/${relKey}` };
}

export async function storageGet(relKey: string): Promise<{ key: string; url: string }> {
  const key = safeKey(relKey);
  return { key, url: `/uploads/${key}` };
}

export async function storageGetSignedUrl(relKey: string): Promise<string> {
  return (await storageGet(relKey)).url;
}
