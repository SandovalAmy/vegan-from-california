import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'

/***
 *
 * layout is the main entry point of the app
 * all components are wrapped within as its children
 *
 ***/

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vegan from California',
  description: 'Created by Amy Sandoval',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <main className={inter.className}>{children}</main>
      <Footer />
    </html>
  )
}
