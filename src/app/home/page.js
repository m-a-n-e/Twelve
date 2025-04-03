'use client';

import { AiOutlineInfoCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import Scene from "@/components/Scene";

export default function Home() {
  const [opcao, setOpcao] = useState(0);

  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center text-gray-950">
      <div className="absolute top-10">
        <h1 className="text-4xl font-light">
          O robô <span className="text-purple-600">&quot;Twelve&quot;</span> em Three.js
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-100 flex flex-col items-left text-justify">
          <AiOutlineInfoCircle className="size-8 text-gray-950 mb-2" />
          <div>
            <p className="mt-2">
              Este projeto utiliza um modelo 3D criado por TwistedY, disponível no Sketchfab:
              <a
                href="https://sketchfab.com/3d-models/twelve-the-robot-low-poly-4170f970674f48b9932ff4a450564e51"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <span className="text-purple-600 ml-2">
                  Twelve - The Robot (Low Poly).
                </span>
              </a>
            </p>
            <p className="mt-4">
              Renderizado com Three.js e Next.js, o modelo possui 41 partes móveis e animações dinâmicas para uma experiência interativa.
            </p>
          </div>
        </div>

        <div className="relative w-200 h-200 flex items-center justify-center">
          <Scene animationId={opcao} />
        </div>
        <div className="w-100 text-justify">
          <p>
            Clique nos botões 1, 2, 3 ou 4 para escolher a animação do Robô Twelve e ver seus movimentos em ação!
          </p>
          <p className="mt-4">
            Conecte-se comigo no LinkedIn e explore meus projetos no GitHub!
          </p>
          <div className="flex flex-row space-x-2">
            <a
              href="https://www.linkedin.com/in/emanueldoerner/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <AiFillLinkedin className="size-8 text-gray-950 hover:text-purple-500 transition-all" />
            </a>
            <a
              href="https://github.com/m-a-n-e/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <AiFillGithub className="size-8 text-gray-950 hover:text-purple-500 transition-all" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex space-x-3">
        {[0, 1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setOpcao(id)}
            className={`p-4 border-2 border-gray-950 rounded text-gray-950 transition 
              ${opcao === id ? "bg-gray-950 text-white border-transparent" : "hover:bg-gray-950 hover:text-white"}`}
          >
            {id + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
