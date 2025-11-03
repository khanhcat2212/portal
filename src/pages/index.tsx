import { Geist, Geist_Mono } from "next/font/google";
import styles from "@src/styles/Home.module.css";
import Button from "@src/components/button/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
    </div>
  );
}
