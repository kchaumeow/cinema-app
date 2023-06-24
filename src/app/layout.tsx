import { ReactNode } from 'react'
import './styles/globals.css'
import Image from 'next/image'
import { Roboto } from "next/font/google";
import Link from 'next/link';
const roboto = Roboto({
  weight: ["400", "500","700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function Layout({children} : {children: ReactNode}){
  return (
    <html>
      <body className={`wrapper ${roboto.className}`}>
          <header className="header">
            <Link href="/">Билетопоиск</Link>
            <Image src="/images/basket.svg" alt='busket' width={30} height={30}></Image>
          </header>
          <main className='main'>{children}</main>
          <footer className="footer">
            <Link href="/QA">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
          </footer>
      </body>
    </html>
  )
}