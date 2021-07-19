import styleHome from '../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignews | Home</title>
      </Head>
      <h1 className={styleHome.title}>Home</h1>
    </>
  )
}