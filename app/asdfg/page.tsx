"use client";

import SplitText from "@/components/ui/SplitText";

export default function SecretPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col items-center justify-center basis-full">
        <SplitText text="The passkey is" className="font-hero text-2xl md:text-5xl font-bold text-lime-400" />
        <SplitText text="gfgkiit53203jk025u233" className="text-lg mt-2 text-zinc-400" delay={20} />
      </div>
    </div>
  )
}
