import {Login} from '../components/Form/Login';
import Head from 'next/head';

export default function login() {
    return (
      <>
        <Head>
          <title>
            Login
          </title>
        </Head>
        <>
        <Login/>
        </>
      </>
    )
  }