import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio magnam minima officia ipsum nobis eveniet quae cupiditate pariatur? Rem doloremque animi tempora error impedit a tenetur cupiditate unde consequuntur?</p>
        <Link href="/ninjas"><a className={styles.btn}>See ninja listing</a></Link>
      </div>
    </>
  )
}
