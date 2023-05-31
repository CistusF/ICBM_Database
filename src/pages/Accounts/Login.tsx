import Nav from 'modules/modules/Nav'
import styles from 'modules/styles/Accounts/Login.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useRef } from 'react'

export default function Login() {
    const inputs = useRef<HTMLInputElement[]>([]);

    const RequestLogin = async (e: FormEvent) => {
        e.preventDefault();
        console.log('Requesting login');
        const inputDatas = inputs.current;

        let id = inputDatas[0].value, pw = inputDatas[1].value;
        const loginData = await fetch("/api/Accounts/Login", {
            body: JSON.stringify({ id, pw }),
            method: 'POST',
        });
        const result = await loginData.json();
        console.log(result);
    }
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
                    <form onSubmit={RequestLogin} className={styles.inputs}>
                        <label><p>ID</p><input required ref={e => inputs.current[0] = e!} type={'text'} /></label>
                        <label><p>PW</p><input required ref={e => inputs.current[1] = e!} type={"password"} /></label>
                        <input type={"submit"} value={"로그인하기"} />
                    </form>
                </div>
            </div>
        </>
    )
}
