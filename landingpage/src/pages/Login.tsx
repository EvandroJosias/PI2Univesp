import Head from 'next/head';
import {Login} from '../components/Form/Login'

export default function Newuser() {
    return (
      <>
        <Head>
          <title>
            Novo Usuario
          </title>
        </Head>
        <>
        <Login/>
        </>
      </>
    )
  }