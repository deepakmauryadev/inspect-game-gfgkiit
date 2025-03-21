"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const limit = 50;
const randomNumber = 41;

export default function Page() {
  const [hintVisible, setHintVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("https://gfgkiit.in");
  }
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleResize = () => setHintVisible(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    handleResize();
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-evenly">
      <div className="flex justify-evenly basis-full">
        {[...Array(limit).keys()].map((_, i) => (
          <div className="flex basis-full" key={i}></div>
        ))}
      </div>
      <div className="flex flex-col self-center items-center">
        <h1 className="text-4xl font-black font-hero text-lime-400">LEVEL 0</h1>
        <p className="mt-2 text-xl text-zinc-400">Find the hidden URL to proceed to the next level.</p>
        {hintVisible && (
          <p className="mt-4 text-green-400">Hint: Try to find hidden element!</p>
        )}
      </div>
      <div className="flex justify-evenly basis-full">
        {[...Array(limit).keys()].map((_, i) => (
          <div className="flex basis-full grow shrink w-max items-center" key={i} suppressHydrationWarning>
            {randomNumber === i && (<span className="!hidden" id="hidden-element" onClick={handleClick}>Click to redirect <FaExternalLinkAlt /></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
