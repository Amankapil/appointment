"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState();
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => audioChunks.current.push(event.data);

    recorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", audioBlob);

      const res = await fetch("/api/record", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      alert("Uploaded URL: " + result.url);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Audio Recorder</h1>
      <div className="mt-4">
        {!recording ? (
          <button
            onClick={startRecording}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Stop & Upload
          </button>
        )}
      </div>
    </div>
  );
}
