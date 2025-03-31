"use client";

import Particles from "@/components/ui/ParticleBackgroud";
import SplitText from "@/components/ui/SplitText";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const limit = 50;
const randomNumber = 41;

export default function Page() {
  const [hintVisible, setHintVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/asdfg");
  }
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleResize = () => setHintVisible(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    handleResize();

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <div className="absolute w-full h-full -z-20">
        <Particles
          className="w-full h-full relative"
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="flex flex-col h-full w-full justify-evenly">
        <div className="flex justify-evenly basis-full">
          {[...Array(limit).keys()].map((_, i) => (
            <div className="flex basis-full" key={i}></div>
          ))}
        </div>
        <div className="flex flex-col self-center items-center">
          <SplitText text="LEVEL 0" className="font-hero text-4xl md:text-5xl font-black text-lime-400" />
          <SplitText text="Find the URL hidden in the component to proceed to the key." className="text-lg mt-2 text-zinc-400" delay={20} />
          {hintVisible && (<p className="mt-4 text-green-400">Hint: Try to find hidden element!</p>)}
        </div>
        <div className="flex justify-evenly basis-full">
          {[...Array(limit).keys()].map((_, i) => (
            <div className="flex basis-full grow shrink w-max items-center" key={i} suppressHydrationWarning>
              {randomNumber === i && (<span className="!hidden" id="hidden-element" onClick={handleClick}>Click to redirect <FaExternalLinkAlt /></span>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
