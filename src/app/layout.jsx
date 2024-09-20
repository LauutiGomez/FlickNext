import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FlickNext - Ver peliculas, ver series online Gratis en HD",
  description: "Web generada con Nextjs simulando una pagina para visualizar peliculas online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/fav-icon.webp" type="image/webp" sizes="32x32" />
      </head>
      <body>
      <header className="sticky top-0 w-100% z-10">
      <NavBar/>
      </header>
      <main>
      {children}
      </main>
      </body>
    </html>
  );
}
