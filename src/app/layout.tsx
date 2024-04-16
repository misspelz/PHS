import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contextapi";
import { Toaster } from "react-hot-toast";

const lato = Lato({ subsets: ["latin-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "PrinceHandymanServices - Expert Handyman for Home Repairs & Maintenance",
  description: "Looking for reliable home repair services? PrinceHandymanServices (PHS) offers professional plumbing, painting, tiling, drywall repairs, carpentry, TV mounting, and general household maintenance. Trust our skilled handymen to keep your home in perfect condition. Contact us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={lato.className}>
          {children}
          <Toaster
            toastOptions={{
              style: {
                maxWidth: "700px",
                padding: "12px 16px",
                fontSize: "17px",
                fontWeight: "400",
              },
              error: {
                style: {
                  color: "red",
                },
              },
              success: {
                style: {
                  color: "green",
                },
              },
            }}
            position="top-center"
            reverseOrder={false}
          />
        </body>
      </html>
    </AuthProvider>
  );
}
