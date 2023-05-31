import styles from 'modules/styles/modules/Nav.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className={styles.nav}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/logo.svg"} alt={'logo'} width={35} height={35} />
                    <p>ICBM_DB</p>
                </Link>
                <div className={styles.items}>
                    <Link href={"/Accounts/Login"}>Login</Link>
                    <Link href={"/"}>About</Link>
                </div>
            </div>
        </>
    )
}
