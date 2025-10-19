'use client';

import { useState } from 'react';

type DogApiResponse = { message: string };

export default function Fetcher({url, text}: {url: string, text: string}) {
  const [data, setData] = useState<DogApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ paddingBottom: "16px" }} className="flex justify-left">
      <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
        {loading ? 'Loading...' : text}
      </a>
      </div>
      {error && <p className="text-red-500">Error: {error}</p>}
            
      {data && (
        <div>
          <img src={data?.message} alt="Random Dog" style={{ width: "400px", height: "400px", objectFit: "contain" }} />
        </div>
      )}
    </div>
  );
}