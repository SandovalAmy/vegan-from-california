/***
 *
 * by default, pages are rendered as server-side components
 * to switch to client-side component, add "use client" to top of page
 * https://nextjs.org/docs/getting-started/react-essentials
 *
 *
 * IMAGE DOCS: https://nextjs.org/docs/app/building-your-application/optimizing/images
 *
 ***/

import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Vegan from California</h1>
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/smiling-face-behind-laptop.JPG"
            alt="Picture of the author"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <p className={styles.text}>
          Welcome to my official website! My goal for Vegan from California is
          to gather all of my favorite vegan resources in one place. Here I will
          share why I went vegan, how I went vegan, what it means to be vegan
          and what you can do to begin your vegan lifestyle.
          <br></br>
          <br></br>
          If you are interested, stay tuned for vegan content.
        </p>
      </div>
    </main>
  )
}
