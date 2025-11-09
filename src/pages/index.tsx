import LandingPageLayout from "@src/layout/landingPageLayout";
import Overview from "@src/feature/landingPage/Overview";
import Managements from "@src/feature/landingPage/Managements";
import Customers from "@src/feature/landingPage/Customers";
import QA from "@src/feature/landingPage/QA";
import Appeal from "@src/feature/landingPage/Appeal";
import Head from "next/head";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@src/feature/landingPage/Features"), {
  ssr: false,
  loading: () => <div className="animate-pulse h-screen bg-gray-100 rounded" />
});

export default function Home() {
  return (
    <>
      <Head>
        <title>WIFOSELL - Giải pháp bán hàng đa kênh</title>
        <meta
          name="description"
          content="Wifosell giúp doanh nghiệp quản lý và bán hàng đa kênh hiệu quả. Nền tảng quản lý, đồng bộ và tăng trưởng kinh doanh dễ dàng."
        />
        <meta name="keywords" content="wifosell, bán hàng, quản lý bán hàng, đa kênh, phần mềm bán hàng" />
        <meta property="og:title" content="WIFOSELL - Giải pháp bán hàng đa kênh" />
        <meta property="og:description" content="Phần mềm quản lý và bán hàng đa kênh giúp bạn tăng trưởng kinh doanh." />
        <meta property="og:image" content="/banner.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

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
    </>

  );
}
