import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mooni - Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="./logo512.png" className={styles.logo}/>
        <h1 className={styles.title}>
          Mooni
        </h1>

        <p className={styles.description}>
          Mooni is under maintenance. We will be back soon !
        </p>
      </main>
    </div>
  )
}
