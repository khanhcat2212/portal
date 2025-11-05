import { Geist, Geist_Mono } from "next/font/google";
import LandingPageLayout from "@src/layout/landingPageLayout";
import Overview from "@src/feature/landingPage/Overview";
import Features from "@src/feature/landingPage/Features";
import Managements from "@src/feature/landingPage/Managements";
import Customers from "@src/feature/landingPage/Customers";
import QA from "@src/feature/landingPage/QA";
import Appeal from "@src/feature/landingPage/Appeal";


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
      <section id="overview">
        <Overview />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Managements />
      </section>
      <section id="customer">
        <Customers />
        <QA />
        <Appeal />
      </section>
    </LandingPageLayout>
  );
}
