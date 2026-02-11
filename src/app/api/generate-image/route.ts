import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt, numberOfImages = 1 } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Generate images using Pollinations.ai (Free API) - Sequentially to avoid rate limits
    const generatedImagesBase64: string[] = [];

    for (let i = 0; i < numberOfImages; i++) {
      // Add a random seed to ensure variety if multiple images are requested
      const seed = Math.floor(Math.random() * 1000000);
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${seed}&nologo=true&width=1024&height=1024`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.warn(`Failed to fetch image ${i + 1}: ${response.statusText}`);
          continue;
        }

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        generatedImagesBase64.push(buffer.toString('base64'));

        // Add a delay between requests if not the last one
        if (i < numberOfImages - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        }
      } catch (err) {
        console.error(`Error generating image ${i + 1}:`, err);
      }
    }

    if (generatedImagesBase64.length === 0) {
      return NextResponse.json({ error: "Failed to generate any images." }, { status: 500 });
    }

    return NextResponse.json({ images: generatedImagesBase64 });

  } catch (error: any) {
    console.error("Error generating images with Pollinations.ai:", error);
    const errorMessage = error.message || "Failed to generate images";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
