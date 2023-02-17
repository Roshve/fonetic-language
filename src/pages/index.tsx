import Head from 'next/head'
import Image from 'next/image'
import styles from '@/static/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <span className={styles.title}>Vowels</span>
          <div className={styles.content}>
            <div className={styles.container}>
              <span className={styles.subtitle}>Longs</span>
              <span className={styles.letter}>i:</span>
              <span className={styles.letter}>ɑ:</span>
              <span className={styles.letter}>ɔ:</span>
              <span className={styles.letter}>ɜ:</span>
              <span className={styles.letter}>u:</span>
            </div>
            <div className={styles.container}>
              <span className={styles.subtitle}>Shorts</span>
              <span className={styles.letter}>æ</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>ə</span>
              <span className={styles.letter}>ɪ</span>
              <span className={styles.letter}>ɒ</span>
              <span className={styles.letter}>ʌ</span>
              <span className={styles.letter}>ʊ</span>
            </div>
          </div>
          <span className={styles.subtitle}>Diphthong</span>
          <div className={styles.content}>
            <div className={styles.container}>
              <span className={styles.letter}>eə</span>
              <span className={styles.letter}>ɔɪ</span>
              <span className={styles.letter}>aɪ</span>
              <span className={styles.letter}>ʊə</span>
            </div>
            <div className={styles.container}>
              <span className={styles.letter}>aʊ</span>
              <span className={styles.letter}>eɪ</span>
              <span className={styles.letter}>ɪə</span>
              <span className={styles.letter}>oʊ</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
