'use client';
import Image from "next/image";
import Fetcher from "./ui/Fetcher";
import { useEffect, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState('js');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('Fetch!!');

  useEffect(() => {
    console.log("Selected language:", lang);
    if (lang === 'js') {
      setUrl('https://dog.ceo/api/breeds/image/random');
      setText('Fetch JS ');
    } else if (lang === 'go') {
      // Load Go related resources or perform actions
      setUrl('http://localhost:8080/');
      setText('Fetch Go ');
    } else if (lang === 'python') {
      // Load Python related resources or perform actions
      setUrl('http://localhost:8081/');
      setText('Fetch Python ');
    } else if (lang === 'java') {
      // Load Java/Kotlin related resources or perform actions
      setUrl('http://localhost:8082/');
      setText('Fetch Java/Kotlin ');
    }
  }, [lang]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left leading-tight">
         Simple Webapp with Next.js
        </h1>
         <div className="flex gap-8 w-full items-center">
        Languages:
        <label>
          <input type="radio" name="langGroup" value="option1" checked={lang === 'js'} onChange={() => setLang('js')} />
         Js
        </label>
        <label>
          <input type="radio" name="langGroup" value="option2" checked={lang === 'go'} onChange={() => setLang('go')} />
          Go
        </label>
        <label>
          <input type="radio" name="langGroup" value="option3" checked={lang === 'python'} onChange={() => setLang('python')} />
          Python
        </label>
         <label>
          <input type="radio" name="langGroup" value="option4" checked={lang === 'java'} onChange={() => setLang('java')} />
          Java/Kotlin
        </label>
         </div>
        <div className="flex gap-8 w-full items-center">
         <Fetcher url={url} text={text} />              
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
