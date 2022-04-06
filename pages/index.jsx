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
          Mooni development have been stopped. <br/>
          If you are looking for a good On/Off ramp service, we highly suggest you to try :<br/><br/>
          <a href="https://mtpelerin.com/" style={{color: '#35383a'}}>
          <img src="https://www.mtpelerin.com/images/logo.svg" width={200}/>
          </a>
        </p>
      </main>
    </div>
  )
}
