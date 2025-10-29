/** @server-only */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

// ✅ Point directly to your Space endpoint — do not append /run/predict again later
// const HF_MODEL_URL = "https://narendraa-Auralyn.hf.space/run/predict";
// const HF_MODEL_URL = "https://narendraa-Auralyn.hf.space/api/predict/";
const HF_MODEL_URL = "https://narendraa-Auralyn.hf.space/predict";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploadResult: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "auralyn_uploads",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    const audioUrl = uploadResult.secure_url;

    // ✅ Send file bytes to Hugging Face Space endpoint directly
    // Prepare form-data for FastAPI
        // --- STEP 1: Send file to Hugging Face FastAPI endpoint ---
    const form = new FormData();
form.append("file", new File([buffer], "audio.wav", { type: "audio/wav" }));

const hfResponse = await fetch(HF_MODEL_URL, {
  method: "POST",
  body: form,
});


    if (!hfResponse.ok) {
      const errText = await hfResponse.text();
      console.error("❌ Hugging Face API error:", errText);
      throw new Error(`Hugging Face API Error: ${hfResponse.status} ${errText}`);
    }

    const hfData = await hfResponse.json();
    const transcript = hfData.text || "No transcription received.";


    return NextResponse.json({
      fileUrl: audioUrl,
      transcript,
      detectedSounds: ["(sound analysis coming soon)"],
      inference: "Speech successfully transcribed using Hugging Face Whisper.",
    });
  } catch (error: any) {
    console.error("❌ Audio analysis failed:", error);
    return NextResponse.json(
      { error: "Audio analysis failed.", details: error.message },
      { status: 500 }
    );
  }
}
