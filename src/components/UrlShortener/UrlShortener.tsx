import React, { useState } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }

    // Add the link to the shortenedLinks array
    setShortenedLinks([...shortenedLinks, url]);
    setUrl("");
    setError("");
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-12 ml-3 mr-3 bg-blue-950 rounded-lg">
        {/* Shortener Form */}
        <form
          className="flex flex-col md:flex-row gap-3 justify-center items-stretch"
          onSubmit={handleSubmit}
        >
          <label htmlFor="longLinkInput" className="sr-only">
            Enter a URL to shorten
          </label>
          <input
            id="longLinkInput"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here. (Must be in https://www.google.com format)"
            required
            className="text-gray-500 bg-white grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white font-bold px-6 py-3 rounded-md hover:bg-teal-700 transition w-full md:w-auto"
          >
            Shorten It!
          </button>
        </form>

        {/* Error message */}
        {error && (
          <div className="text-red-500 mt-2 text-center md:text-left" role="alert">
            {error}
          </div>
        )}

        {/* Shortened Links — only show if there are any */}
        {shortenedLinks.length > 0 && (
          <div id="shortened-links" className="mt-6 space-y-3" aria-live="polite">
            {shortenedLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-white p-3 rounded shadow"
              >
                <span className="wrap-break-word">{link}</span>
                <button className="mt-2 md:mt-0 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}