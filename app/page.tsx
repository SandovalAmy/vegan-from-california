/***
 *
 * by default, pages are rendered as server-side components
 * to switch to client-side component, add "use client" to top of page
 * https://nextjs.org/docs/getting-started/react-essentials
 *
 ***/

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Vegan from California</h1>
        <p>Home page content will be displayed here.</p>
      </div>
    </main>
  )
}
