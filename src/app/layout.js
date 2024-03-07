import { Roboto } from "next/font/google";
import "./globals.css";
import { ProviderQuery } from "@/queries/provider";

const inter = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Logique ngmusic",
  description: "Santaikan pikiran, dengarkan music dari kita!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderQuery>
          <main className="md:max-w-[50%] md:mx-auto md:shadow-md">
            {children}
          </main>
        </ProviderQuery>
      </body>
    </html>
  );
}
