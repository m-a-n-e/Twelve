'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function Overlay({ onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={onClose} // clique fora
        >
            <motion.div
                className="relative p-8 w-screen h-screen bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-4 right-4 hover:text-purple-500"
                >
                    <IoClose size={28} />
                </button>
                <div className="text-lg space-y-6 leading-relaxed mt-20 mx-10">
                    <div className="flex items-start gap-3">
                        <span className="font-black text-4xl text-purple-500">1.</span>
                        <p>
                            Este projeto utiliza um modelo 3D criado por <strong>TwistedY</strong>, disponível no Sketchfab:
                            <a
                                href="https://sketchfab.com/3d-models/twelve-the-robot-low-poly-4170f970674f48b9932ff4a450564e51"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-purple-950 underline hover:font-bold hover:text-purple-500 transition-all"
                            >
                                Twelve - The Robot (Low Poly)
                            </a>.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="font-black text-4xl text-purple-500">2.</span>
                        <p>
                            O modelo é renderizado com <strong>Three.js</strong> e <strong>Next.js</strong>, garantindo uma experiência fluida e imersiva.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="font-black text-4xl text-purple-500">3.</span>
                        <p>
                            O robô conta com <strong>41 partes móveis</strong> e animações dinâmicas que tornam a interação mais realista.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="font-black text-4xl text-purple-500">4.</span>
                        <p>
                            Use os botões <strong>1, 2, 3</strong> ou <strong>4</strong> para explorar diferentes animações do Robô Twelve.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="font-black text-4xl text-purple-500">5.</span>
                        <p>
                            Conecte-se comigo no <strong>LinkedIn</strong> e explore outros projetos no <strong>GitHub</strong>!
                        </p>
                    </div>
                </div>



            </motion.div>
        </motion.div>
    );
}
