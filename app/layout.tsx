import './globals.css'
import { Montserrat_Alternates, Urbanist } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'

/***
 *
 * layout is the main entry point of the app
 * all components are wrapped within as its children
 *
 ***/

const urbanist = Urbanist({
  subsets: ['latin'],
})

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
    <html lang="en" className={urbanist.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </html>
  )
}
