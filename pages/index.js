import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { MdOutlineInvertColors } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Color & Gradient Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          COLOR & GRADIENT GENERATOR
        </h1>
        <div className={styles.grid}>
          <Link href="/color-generator"><button className={styles.colorButton}><IoColorPaletteSharp className={styles.reactIcon} /><br/>COLOR GENERATOR<br/></button></Link>
          <Link href="/gradient-generator"><button className={styles.gradientButton}><MdOutlineInvertColors className={styles.reactIcon} /><br/>GRADIENT GENERATOR<br/></button></Link>
        </div>
        <p className={styles.footer}>By <a href="https://www.linkedin.com/in/sanjay-karki9/" target="_blank" rel='noreferrer'>Sanjay Karki</a></p>
      </main>
    </div>
  )
}
