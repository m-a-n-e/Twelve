import "./globals.css";

export const metadata = {
  title: "Robô Twelve em Three.js",
  description: "Renderizado com Three.js e Next.js, o modelo possui 41 partes móveis e animações dinâmicas para uma experiência interativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="text-fuchsia-950 bg-white">
        {children}
      </body>
    </html>
  );
}
