import "./globals.css";
import { FaGithub, FaLinkedin, FaCircleInfo, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const metadata = {
  title: "Conheça o robô Twelve",
  description: "Renderizado com Three.js e Next.js, o modelo possui 41 partes móveis e animações dinâmicas para uma experiência interativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="text-black bg-blue-100">
        <ul className="absolute left-5 top-5 flex gap-4">
          <li><FaGithub className="size-10" /></li>
          <li><FaLinkedin className="size-10" /></li>
          <li>
            <a href="#info" className="icon-link" aria-label="Info">
              <FaCircleInfo className="size-10" />
            </a>
          </li>
        </ul>
        {children}
        <section id="info" className="flex justify-center items-center w-full h-screen">
          <button><a href="#">voltar</a></button>
        </section>
      </body>
    </html>
  );
}
