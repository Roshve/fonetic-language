import Head from 'next/head'
import Image from 'next/image'
import GroupLetters from "@/components/GroupLetters/GroupLetters";
import styles from '@/static/styles/Home.module.css'

const listShorts = ['æ', 'e', 'ə', 'ɪ', 'ɒ', 'ʌ', 'ʊ',]
const listLongs = ['i:', 'ɑ:', 'ɔ:', 'ɜ:', 'u:']
const leftListDiphthongs = ['eə', 'ɔɪ', 'aɪ', 'ʊə']
const rightListDiphthongs = ['aʊ', 'eɪ', 'ɪə', 'oʊ',]

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
            <GroupLetters subtitle="Longs" listLetters={listLongs} />
            <GroupLetters subtitle="Shorts" listLetters={listShorts} />
          </div>
          <span className={styles.subtitle}>Diphthong</span>
          <div className={styles.content}>
            <GroupLetters listLetters={leftListDiphthongs} />
            <GroupLetters listLetters={rightListDiphthongs} />
          </div>
        </div>
      </main>
    </>
  )
}
