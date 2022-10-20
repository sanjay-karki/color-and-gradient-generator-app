import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { TbFaceIdError } from "react-icons/tb";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Page not found</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          ERROR 404
        </h1>
        <div className={styles.grid}>
            <span><TbFaceIdError className={styles.reactIcon} /></span>
        </div>
        <div className={styles.grid}>
            <h2><Link href="/">GO BACK TO HOMEPAGE</Link></h2>
        </div>
      </main>
    </div>
  )
}
