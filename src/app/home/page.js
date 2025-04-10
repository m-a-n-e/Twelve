'use client';

import Scene from "@/components/Scene";
import { Html, RoundedBox } from "@react-three/drei";
import { FiGithub, FiInfo } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="min-w-full min-h-full size-200 flex items-center justify-center">

          <Scene animationId={0}/>
        </div>
      </div>
    </main>
  );
}
