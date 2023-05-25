import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
          <div>
            <Link className={styles.logo} href="/">Vegan Logo</Link>
          </div>
          <div>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href="/my-vegan-story">My Vegan Story</Link>
              </li>
              <li>
                <Link className={styles.link} href="/vegan-resources">Vegan Resources</Link>
              </li>
            </ul>
          </div>
        </div>
      );
}
