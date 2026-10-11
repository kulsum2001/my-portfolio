import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import ParticlesBg from "@/components/ParticlesBg";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { THEME_KEY } from "@/data/themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* applies the saved theme before first paint so there is no flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("${THEME_KEY}");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <ParticlesBg />
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
