import './globals.css'
import type { Metadata } from 'next'
import { gotham, leviathan } from '@/utils/fonts'
import  Header  from '@/modules/header'
import Footer from '@/modules/footer'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} ${leviathan.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
