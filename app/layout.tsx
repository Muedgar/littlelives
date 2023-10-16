
    //@ts-nocheck
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/landingpage/navbar'
import styles from './styles/layout.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LittleLives Consult',
  description: 'Building a better world, one child at a time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <section className={styles.container}>
      <NavBar /> 
        </section> 
      </body>
    </html>
  )
}
