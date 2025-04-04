'use client';

import { useState } from "react";
import { AiOutlineInfoCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import Overlay from '@/components/Overlay';

export default function Scene({ animationId = 0 }) {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <>
            <div className="text-purple-950 fixed top-10 left-1/2 transform -translate-x-1/2 z-40 flex items-center space-x-6">
                <a
                    href="https://www.linkedin.com/in/emanueldoerner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-2 flex"
                >
                    <AiFillLinkedin size={50} />
                </a>

                <button
                    onClick={() => setShowPopover(true)}
                    className="rounded p-2 flex cursor-pointer"
                >
                    <AiOutlineInfoCircle size={50} />
                </button>


                <a
                    href="https://github.com/m-a-n-e/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-2 flex"
                >
                    <AiFillGithub size={50} />
                </a>
            </div>

            <AnimatePresence>
                {showPopover && <Overlay onClose={() => setShowPopover(false)} />}
            </AnimatePresence>
        </>
    );
}
