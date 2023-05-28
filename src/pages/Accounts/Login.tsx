import Nav from 'modules/modules/Nav'
import styles from 'modules/styles/Accounts/Login.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="ICBM_DB" />
            </Head>
            <Nav />
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles.logo}>
                        <Image src={"/logo.svg"} width={120} height={120} alt={'logo'} />
                        <p>Login to ICBM_DB</p>
                    </div>
                    <form className={styles.inputs}>
                        <label><span>ID : </span><input type={'text'} /></label>
                        <label><span>PW : </span><input type={"password"} /></label>
                        <input type={"button"} value={"로그인하기"} />
                    </form>
                </div>
            </div>
        </>
    )
}
