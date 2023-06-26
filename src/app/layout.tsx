import { ReactNode } from 'react'
import './styles/globals.css'
import CartState from "./components/CartState";
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import ReduxProvider from './provider'
import Link from 'next/link'
const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            <ReduxProvider>
                <body className={`flex_column ${roboto.className}`}>
                    <header className="header flex_justify_between full_width">
                        <Link href="/">Билетопоиск</Link>
                        <Link href="/cart" className='cart dflex'>
                            <CartState/>
                            <Image
                                src="/images/basket.svg"
                                alt="busket"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </header>
                    <main className="flex_column main">{children}</main>
                    <footer className="footer flex_justify_between full_width">
                        <Link href="/QA">Вопросы-ответы</Link>
                        <Link href="/about">О нас</Link>
                    </footer>
                </body>
            </ReduxProvider>
        </html>
    )
}
