import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quran',
  description: 'Quran',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald" style={ { height: '100%' } }>
      <body style={ { height: '100%' } } className={ `{ inter.className } container mx-auto px-5` } >
        <Navbar />
        { children }
        <Footer />

      </body>
    </html>
  )
}
