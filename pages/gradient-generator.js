import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { FaHome, FaRandom } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";


export default function GradientGenerator() {
  if (typeof window !== "undefined") {
    const color1 = document.querySelector("#color1");
    const color2 = document.querySelector("#color2");
    const body = document.querySelector("#body");
  }
  const changeBgGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    document.getElementById("gradientIs").innerHTML = body.style.background+";";
  }
  const handleRandom = () => {
    const randomNum = () => {
      return Math.floor(Math.random() * 256);
    }
    body.style.background = "linear-gradient(to right, rgb("+randomNum()+", "+randomNum()+", "+randomNum()+")" + ", rgb("+randomNum()+", "+randomNum()+", "+randomNum()+")" + ")";
    document.getElementById("gradientIs").innerHTML = body.style.background+";";
  }

  const forInputs = (InputId, DefaultValue)=>{
    return (
      <div className={styles.card}>
        <h2>Color 1 &rarr;</h2>
        <input
          className={styles.color}
          id={InputId}
          name="name"
          type="color"
          defaultValue={DefaultValue}
          onChange={changeBgGradient}
        />
      </div>
    )
  }

  React.useEffect (()=> {
    changeBgGradient();
  }, [])
  return (
    <div id="body">
      <Head>
          <title>Gradient Generator</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          GRADIENT GENERATOR
        </h1>
        <div className={styles.grid}>
          {forInputs("color1", "#ffffff")}
          {forInputs("color2", "#FFDA22")}
        </div>
        <button className={styles.randomButton} onClick={handleRandom}>
          <div><h2>Randomize </h2><FaRandom className={styles.randomButtonReactIcon} /></div>
        </button>
        <p className={styles.gradientIs}>Gradient: <span id="gradientIs"></span></p>
        <div className={styles.grid}>
          <Link href="/"><button className={styles.goBackButton}><FaHome className={styles.reactIcon} /><br/>GO BACK TO HOMEPAGE</button></Link>
          <Link href="/color-generator"><button className={styles.colorButton}><IoColorPaletteSharp className={styles.reactIcon} /><br/>COLOR GENERATOR</button></Link>
        </div>
        <p className={styles.footer}>By <a href="https://www.linkedin.com/in/sanjay-karki9/" target="_blank" rel='noreferrer'>Sanjay Karki</a></p>
      </main>
    </div>
    
  )
}

