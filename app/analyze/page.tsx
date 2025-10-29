"use client";

import AudioUploader from "@/components/audioUploader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8 space-y-10 bg-[linear-gradient(to_bottom,_#c2c9b4_0%,_#426756_50%,_#0c302f_100%)] text-white backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20 max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          🎧 Auralyn Audio Analyzer
        </h1>
        <p className="text-lg text-white/90 max-w-xl mx-auto">
          Upload or record an audio sample and let Auralyn listen, think, and understand your world.
        </p>
      </div>

      {/* Upload + Analysis Panel */}
      <AudioUploader />

      <Link href="/">
        <Button
          variant="outline"
          className="mt-10 border-[#c2c9b4] text-[#c2c9b4] hover:bg-[#426756] hover:text-white transition-all"
        >
          ← Back to Home
        </Button>
      </Link>
    </main>
  );
}
