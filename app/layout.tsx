/* Components */
import { Providers } from '@/lib/providers'
/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import NavBar from './components/landingpage/navbar'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <NavBar />

            <main></main>

            <footer></footer>
          </section>
        </body>
      </html>
    </Providers>
  )
}
