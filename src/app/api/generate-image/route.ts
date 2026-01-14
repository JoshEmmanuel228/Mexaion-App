import { NextResponse } from "next/server";
import { PredictionServiceClient } from '@google-cloud/aiplatform';
import { helpers } from '@google-cloud/aiplatform';

export async function POST(request: Request) {
  try {
    const { prompt, numberOfImages = 1 } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const projectId = process.env.GCP_PROJECT_ID;
    const location = process.env.GCP_LOCATION || 'us-central1'; // Default to us-central1

    if (!projectId) {
      return NextResponse.json({ error: "GCP_PROJECT_ID not configured in .env.local" }, { status: 500 });
    }

    // Instantiates a client
    const clientOptions = {
      apiEndpoint: `${location}-aiplatform.googleapis.com`,
    };
    const predictionServiceClient = new PredictionServiceClient(clientOptions);

    // Configure the parent resource
    // Using imagen-3.0-generate-001 as per example, user can change to imagegeneration@005 or @006
    const endpoint = `projects/${projectId}/locations/${location}/publishers/google/models/imagen-3.0-generate-001`;

    const promptText = {
      prompt: prompt,
    };

    const instanceValue = helpers.toValue(promptText);
    const instances = [instanceValue];

    const parameter = {
      sampleCount: numberOfImages,
      // You can also specify 'allow_generation_of_people' parameter here
      // allow_generation_of_people: 'allow_all', // or 'dont_allow', 'allow_adult'
    };
    const parameters = helpers.toValue(parameter);

    const predictRequest = {
      endpoint,
      instances,
      parameters,
    };

    // Predict request
    const [response] = await predictionServiceClient.predict(predictRequest);

    const predictions = response.predictions;

    if (!predictions || predictions.length === 0) {
      return NextResponse.json({ error: 'No image was generated. Check the request parameters and prompt.' }, { status: 500 });
    }

    const generatedImagesBase64: string[] = [];
    for (const prediction of predictions) {
      const imgBase64 = prediction.structValue?.fields?.bytesBase64Encoded?.stringValue;
      if (imgBase64) {
        generatedImagesBase64.push(imgBase64);
      }
    }

    if (generatedImagesBase64.length > 0) {
      return NextResponse.json({ images: generatedImagesBase64 });
    } else {
      return NextResponse.json({ error: "Failed to extract base64 images from predictions." }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Error generating images with Vertex AI:", error);
    const errorMessage = error.details || error.message || "Failed to generate images";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
