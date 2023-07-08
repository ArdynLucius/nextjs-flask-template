import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>kidney dealership</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
