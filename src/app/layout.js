import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import './globals.css'
import { Montserrat } from 'next/font/google'

// export const metadata = {
//   title: 'ERP',
//   description: 'Generated by create next app',
// }

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} bg-skin-base-light`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
