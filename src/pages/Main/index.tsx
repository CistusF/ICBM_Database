import Head from 'next/head'
import Image from 'next/image'
import styles from 'modules/styles/Main/index.module.css'

import Nav from 'modules/modules/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>DB_MAIN</title>
        <meta name="description" content="ICBM_DB" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <p className={styles.title}>ICBM_Database</p>
            <p className={styles.description}>환영합니다 Username님.</p>
          </div>
          <div className={styles.background}></div>
        </div>
      </div>
    </>
  )
}
