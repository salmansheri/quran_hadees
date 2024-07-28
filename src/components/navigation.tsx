"use client";

import { MagicButton } from "./ui/magic-button";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter();

  return (
    <header className="h-[3rem] flex items-center px-5 md:px-10 bg-transparent fixed bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 w-full justify-between z-[999]">
      <aside>
        <h2 className="text-xl">Quran and Hadees</h2>
      </aside>
      <aside>
        <MagicButton onClick={() => router.push("/sign-in")} title="Login" />
      </aside>
    </header>
  );
};
