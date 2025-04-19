'use client';

import { useState } from "react";
import Scene from "@/components/Scene";
import { FaCircleLeft, FaCircleRight, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const [animation, setAnimation] = useState(0);

  const animations = [0, 1, 2, 3];

  const handleLeftClick = () => {
    setAnimation((prev) => (prev - 1 + animations.length) % animations.length);
  };

  const handleRightClick = () => {
    setAnimation((prev) => (prev + 1) % animations.length);
  };

  return (
    <main className="relative flex flex-col items-center justify-center">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="min-w-full min-h-full size-200 flex items-center justify-center">

          <Scene animationId={animations[animation]} />

        </div>
      </div>

      <ul className="icon-link absolute left-1/2 transform -translate-x-1/2 top-5 flex gap-4">
        <li>
          <button onClick={handleLeftClick} className="icon-link flex items-center justify-center w-12 h-12 cursor-pointer">
            <FaCircleLeft className="size-10 hover:size-15 transition-all text-fuchsia-700" />
          </button>
        </li>
        <li>
          <a
            href="https://github.com/m-a-n-e/twelve"
            className="icon-link flex items-center justify-center w-12 h-12"
            aria-label="GitHub"
            target="_blank"
          >
            <FaGithub className="size-10 hover:size-12 hover:text-fuchsia-700 transition-all" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/emanueldoerner/"
            className="icon-link flex items-center justify-center w-12 h-12"
            aria-label="Linkedin"
            target="_blank"
          >
            <FaLinkedin className="size-10 hover:size-12 hover:text-fuchsia-700 transition-all" />
          </a>
        </li>
        <li>
          <button onClick={handleRightClick} className="icon-link flex items-center justify-center w-12 h-12 cursor-pointer">
            <FaCircleRight className="size-10 text-fuchsia-700 hover:size-15 transition-all" />
          </button>
        </li>
      </ul>
      <div target="_blank" className="fixed bottom-10 text-nowrap text-xs">
        <p className="font-light">
          Modelo 3D por <a href="https://sketchfab.com/3d-models/twelve-the-robot-low-poly-4170f970674f48b9932ff4a450564e51" target="_blank" className="hover:text-fuchsia-700 hover:text-xl font-black transition-all">TwistedY</a> | Desenvolvido por <a href="https://www.linkedin.com/in/emanueldoerner/" target="_blank" className="hover:text-fuchsia-700 font-black hover:text-xl transition-all">Emanuel Doerner</a>
        </p>
      </div>

    </main>
  );
}
