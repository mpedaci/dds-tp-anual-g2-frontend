import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { ThemeRegistry } from "@/components/theme/themeRegistry";
import { Providers } from "@redux/providers";
import "@styles/fonts/fa.css";

export const metadata: Metadata = {
  title: "TP DDS 2024",
  description: "Grupo 02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ThemeRegistry>
        <body>
          <CssBaseline />
          <Providers>{children}</Providers>
        </body>
      </ThemeRegistry>
    </html>
  );
}
