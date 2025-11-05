import Footer from '@src/components/layout/Footer';
import Header from '@src/components/layout/Header';
import React, { ReactNode } from 'react';

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
