import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/organisms/Header.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>One Doctor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<Header/>

      <main className={styles.main}>
        <h1>OneDoctor</h1>
        <button className="text-pink-400">おしてみそ</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/onedoctor.png" alt="One Doctor Logo" className={styles.logo} />
          One Doctor
        </a>
      </footer>
    </div>
  )
}
