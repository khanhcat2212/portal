import { Geist, Geist_Mono } from "next/font/google";
import styles from "@src/styles/Home.module.css";
import Button from "@src/components/button/Button";
import Header from "@src/components/layout/Header";
import LandingPageLayout from "@src/layout/landingPageLayout";


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
    <LandingPageLayout>
      <section id="overview" className="h-30 bg-red-100">
        Tổng quan
      </section>
      <section id="features" className="h-30 bg-blue-100">
        Tính năng
      </section>
      <section id="pricing" className="h-30 bg-green-100">
        Bảng giá
      </section>
      <section id="customer" className="h-30 bg-yellow-100">
        Khách hàng
      </section>
    </LandingPageLayout>
  );
}
