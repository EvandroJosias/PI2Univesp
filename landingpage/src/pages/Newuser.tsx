import styles from '../styles/Newuser.module.scss';
import Head from 'next/head';

export default function Newuser() {
    return (
      <>
        <Head>
          <title>
            Novo Usuario
          </title>
        </Head>
        <div>
          <h1 className={styles.title}>Novo Usuario</h1>
        </div>
      </>
    )
  }
  