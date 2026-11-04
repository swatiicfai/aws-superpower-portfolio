import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swati | Cloud Builder & Superpower Portfolio",
  description: "Personal portfolio submitted for the AWS Student Builder Challenge, hosted on AWS Amplify.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
