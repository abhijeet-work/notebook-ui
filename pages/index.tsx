import { Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NoteBook</title>
        <meta name="description" content="Notebook buy and sell with classmate or within college students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h2' >Welcome MUI Working..</Typography>

      </main>


    </div>
  )
}
