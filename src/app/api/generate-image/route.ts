import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt, numberOfImages = 1 } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Generate images using Pollinations.ai (Free API)
    const imagePromises = Array.from({ length: numberOfImages }).map(async (_, index) => {
      // Add a random seed to ensure variety if multiple images are requested
      const seed = Math.floor(Math.random() * 1000000);
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${seed}&nologo=true&width=1024&height=1024`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image from Pollinations.ai: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return buffer.toString('base64');
    });

    const generatedImagesBase64 = await Promise.all(imagePromises);

    return NextResponse.json({ images: generatedImagesBase64 });

  } catch (error: any) {
    console.error("Error generating images with Pollinations.ai:", error);
    const errorMessage = error.message || "Failed to generate images";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
