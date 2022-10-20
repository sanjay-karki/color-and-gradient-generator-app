import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { FaHome, FaRandom } from "react-icons/fa";
import { MdOutlineInvertColors } from "react-icons/md";

export default function ColorGenerator() {
  if (typeof window !== "undefined") {
    const color = document.querySelector("#color");
    const body = document.querySelector("#body");
  }
  const changeBgColor = () => {
    body.style.background = color.value;
    document.getElementById("colorIs").innerHTML = body.style.background+";";
  }
  
  const handleRandom = () => {
    const randomNum = () => {
      return Math.floor(Math.random() * 256);
    }
    body.style.background = "rgb("+randomNum()+", "+randomNum()+", "+randomNum()+")";
    document.getElementById("colorIs").innerHTML = body.style.background+";";
  }

  React.useEffect (()=> {
    changeBgColor();
  }, [])
  
  return (
    <div id="body">
      <Head>
          <title>Color Generator</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          COLOR GENERATOR
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Color &rarr;</h2>
            <input
              className={styles.color}
              id="color"
              name="name"
              type="color"
              defaultValue="#FFD4CC"
              onChange={changeBgColor}
            />
          </div>
        </div>
        <button className={styles.randomButton} onClick={handleRandom}>
          <div><h2>Randomize </h2><FaRandom className={styles.randomButtonReactIcon} /></div>
        </button>
        <p className={styles.colorIs}>Color: <span id="colorIs"></span></p>
        <div className={styles.grid}>
          <Link href="/"><button className={styles.goBackButton}><FaHome className={styles.reactIcon} /><br/>GO BACK TO HOMEPAGE</button></Link>
          <Link href="/gradient-generator"><button className={styles.gradientButton}><MdOutlineInvertColors className={styles.reactIcon} /><br/>GRADIENT GENERATOR<br/></button></Link>
        </div>
        <p className={styles.footer}>By <a href="https://www.linkedin.com/in/sanjay-karki9/" target="_blank" rel='noreferrer'>Sanjay Karki</a></p>
      </main>
    </div>
    
  )
}

