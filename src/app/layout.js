import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Conheça o robô Twelve",
  description: "Renderizado com Three.js e Next.js, o modelo possui 41 partes móveis e animações dinâmicas para uma experiência interativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="text-purple-950 bg-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
