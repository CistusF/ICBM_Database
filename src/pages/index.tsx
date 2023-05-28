import Head from 'next/head'
import Image from 'next/image'
import styles from 'modules/styles/Home.module.css'

import Nav from 'modules/modules/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>ICBM_DB</title>
        <meta name="description" content="함께 성장하는 연구실" />
      </Head>
      <Nav/>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <p className={styles.title}>ICBM_Database</p>
            <p className={styles.description}>We Study together.</p>
          </div>
          <div className={styles.background}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.title}>
            ICBM Database란?
          </div>
          <div className={styles.contents}>
            <div className={styles.description}>
              <p>ICBM_DB는 ICBM 연구실의</p>
              <p>학업 증진을 목표로 구성된 프로젝트로</p>
              <p>연구실 내 스터디 또는 학습자료를</p>
              <p>연구실 학우들에게 제공하는</p>
              <p>웹 애플리케이션 입니다.</p>
            </div>
            <Image src={'/Home/page1.jpg'} alt={'page1'} width={200} height={140} />
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles.title}>
            ICBM Database란?
          </div>
          <div className={styles.contents}>
            <Image src={'/Home/page2.jpg'} alt={'page2'} width={200} height={140} />
            <div className={styles.description}>
              <p>ICBM_DB는 ICBM 연구실의</p>
              <p>구성원이라면 누구나 쉽게 사용 가능합니다.</p>
              <p>웹사이트에서 로그인 시</p>
              <p>데이터에 접근이 가능하며</p>
              <p>원하는 데이터를 클릭하여</p>
              <p>데이터를 읽을 수 있는 구조로 되어있으며</p>
              <p>업로드한 사용자를 확인할 수 있어</p>
              <p>원하는 정보를 서로</p>
              <p>확인할 수 있는 구조입니다.</p>
              <br />
              <p>[주의]</p>
              <p>DB의 정보를 외부로 누설시</p>
              <p>랩실 내에서 불이익을 받을 수 있으며</p>
              <p>라이센스 위반의 경우</p>
              <p>법률에 따른 처벌을 받으실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
        <p>CopyRight &copy; ICBM Labs</p>
      </div>
    </>
  )
}
