"use client";
import { useState } from "react";
import axios from "axios";

export default function HoroChart() {
  const [formData, setFormData] = useState({
    day: 6,
    month: 1,
    year: 2000,
    hour: 7,
    min: 45,
    lat: 19.132,
    lon: 72.342,
    tzone: 5.5,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = "637630";
  const apiKey = "d749395941556d92772b002cc738fd79ae63d73b";
  const language = "hi";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const auth = `Basic ${btoa(`${userId}:${apiKey}`)}`;
      const response = await axios.post(
        "https://json.astrologyapi.com/v1/horo_chart_image/:chartId",
        formData,
        {
          headers: {
            Authorization: auth,
            "Content-Type": "application/json",
            "Accept-Language": language,
          },
        }
      );
      setResult(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Horoscope Chart</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block font-medium">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          {loading ? "Loading..." : "Get Horoscope"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && (
        <div className="mt-4">
          <h3 className="font-bold">Result:</h3>
          {result.svg ? (
            <div
              dangerouslySetInnerHTML={{ __html: result.svg }}
              className="bg-gray-100 p-2 rounded"
            />
          ) : (
            <pre className="bg-gray-100 p-2 rounded">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
