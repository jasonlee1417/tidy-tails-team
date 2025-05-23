import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

//Change font as needed
const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tidy Tails",
  description: "Let us do the cleaning for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jua.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
