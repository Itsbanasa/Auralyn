"use client";

import { useState, useRef } from "react";

export default function AudioUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [recording, setRecording] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const audioFile = new File([audioBlob], "recording.webm", {
          type: "audio/webm",
        });
        setFile(audioFile);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone access denied or unavailable.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please upload or record audio first!");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="audio-uploader flex flex-col items-center justify-center space-y-6 p-8 rounded-2xl shadow-2xl bg-[linear-gradient(to_bottom,_#c2c9b4_0%,_#426756_50%,_#0c302f_100%)] border border-white/20 text-white max-w-lg w-full mx-auto transition-transform transform hover:scale-[1.02] hover:shadow-emerald-400/30 backdrop-blur-sm">
      <h2 className="text-3xl font-extrabold drop-shadow-md text-white">
        🎙️ Auralyn Audio Analyzer
      </h2>

      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="border border-white/40 bg-white/10 text-white file:text-white file:bg-[#426756] file:border-none file:px-4 file:py-2 file:rounded-lg file:hover:bg-[#345a4a] rounded-lg p-2 cursor-pointer transition"
      />

      <div className="flex items-center gap-4">
        {/* Microphone Button */}
        <button
          onClick={recording ? stopRecording : startRecording}
          className={`p-3 rounded-full transition-all duration-300 ${
            recording
              ? "bg-red-600 hover:bg-red-700 scale-110"
              : "bg-gradient-to-r from-[#426756] to-[#0c302f] hover:scale-110"
          }`}
          title={recording ? "Stop Recording" : "Start Recording"}
        >
          <img
            src="/images/mic.png"
            alt="Record Audio"
            className="w-8 h-8 invert"
          />
        </button>

        {/* Analyze Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-gradient-to-r from-[#426756] to-[#0c302f] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
        >
          {loading ? "Analyzing..." : "Analyze Audio"}
        </button>
      </div>

      {file && (
        <p className="text-sm text-green-100 font-medium">
          Selected file: <strong>{file.name}</strong>
        </p>
      )}

      {result && (
        <div className="mt-8 w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-green-50 space-y-3 shadow-inner">
          <h3 className="font-bold text-xl text-[#c2c9b4]">Results</h3>
          <p><strong>Transcript:</strong> {result.transcript}</p>
         {result.detectedSounds && result.detectedSounds.length > 0 && (
  <p>
    <strong>Detected Sounds:</strong>{" "}
    {result.detectedSounds.join(", ")}
  </p>
)}

          <p><strong>Inference:</strong> {result.inference}</p>
        </div>
      )}
    </div>
  );
}
