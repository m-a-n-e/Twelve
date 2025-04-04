'use client';

import { useState } from "react";
import Scene from "@/components/Scene";

export default function Home() {
  const [opcao, setOpcao] = useState(0);

  return (
    <main className="relative flex flex-col items-center justify-center">
      <div className="w-screen h-screen px-20 flex justify-center items-center">
        <div className="w-200 h-200 flex items-center justify-center">
          <Scene animationId={opcao} />
        </div>
      </div>

      <div className="absolute bottom-15 flex space-x-3">
        {[0, 1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setOpcao(id)}
            className={`p-3 mx-2.5 border-4 font-bold rounded-lg transition 
              ${opcao === id
                ? "bg-purple-950 text-white border-transparent"
                : "hover:bg-purple-950 hover:text-white border-purple-950"}`}
          >
            {id + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
