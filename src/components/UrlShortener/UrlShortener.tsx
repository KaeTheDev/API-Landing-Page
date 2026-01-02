import React, { useState } from "react";

type ShortenedLink = {
  original: string;
  short: string;
};

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      setError("");

      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_BITLY_TOKEN}`,
        },
        body: JSON.stringify({ long_url: url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      // Add shortened link to state
      setShortenedLinks([
        ...shortenedLinks,
        { original: url, short: data.link },
      ]);
      setUrl("");
    } catch (err) {
      setError("Failed to shorten URL. Try again");
      console.error(err);
    }
  };

  return (
    <section className="flex justify-center py-10 bg-gray-50">
      <div className="w-full max-w-5xl bg-blue-950 rounded-lg p-8">
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
          <div
            className="text-red-500 mt-2 text-center md:text-left"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Shortened Links */}
        {shortenedLinks.length > 0 && (
          <div
            id="shortened-links"
            className="mt-6 space-y-3"
            aria-live="polite"
          >
            {shortenedLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-white p-3 rounded shadow"
              >
                {/* Original + Shortened URL */}
                <div className="flex flex-col md:flex-row md:gap-4 wrap-break-word">
                  <span className="text-gray-500">{link.original}</span>
                  <span className="text-teal-500 font-semibold">
                    {link.short}
                  </span>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  className="mt-2 md:mt-0 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(link.short)
                      .then(() => {
                        setCopiedLinkIndex(index);
                        setTimeout(() => setCopiedLinkIndex(null), 2000);
                      })
                      .catch(() => alert("Failed to copy!"));
                  }}
                >
                  {copiedLinkIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}