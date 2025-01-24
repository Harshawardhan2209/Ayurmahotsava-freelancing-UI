import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Ayurmahotsava',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {/* Thin orange line below Navbar */}
        <div className="h-[0.5px] bg-orange-300"></div>
        <main className="flex-grow">{children}</main>
        <div className="h-[0.5px] bg-orange-100 mt-10"></div>
        <Footer />
      </body>
    </html>
  );
}
