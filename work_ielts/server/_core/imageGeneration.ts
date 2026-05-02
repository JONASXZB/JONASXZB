import { ENV } from "./env";

export type GenerateImageOptions = {
  prompt: string;
  size?: "1024x1024" | "1536x1024" | "1024x1536" | "auto";
};

export type GenerateImageResponse = {
  /** Base64 data URL suitable for an <img> tag. */
  url?: string;
};

export async function generateImage(
  options: GenerateImageOptions
): Promise<GenerateImageResponse> {
  if (!ENV.openaiApiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const response = await fetch(`${ENV.openaiBaseUrl.replace(/\/$/, "")}/images/generations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${ENV.openaiApiKey}`,
    },
    body: JSON.stringify({
      model: ENV.openaiImageModel,
      prompt: options.prompt,
      size: options.size ?? "1024x1024",
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Image generation request failed (${response.status} ${response.statusText})${detail ? `: ${detail}` : ""}`
    );
  }

  const result = (await response.json()) as {
    data?: Array<{ b64_json?: string; url?: string }>;
  };

  const first = result.data?.[0];
  if (!first) return {};
  if (first.url) return { url: first.url };
  if (first.b64_json) return { url: `data:image/png;base64,${first.b64_json}` };
  return {};
}
