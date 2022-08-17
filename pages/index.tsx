import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Red Badger&apos;s proof-of-concept for hosting a Next.js application in Fargate</h1>
      <p><a href="https://github.com/redbadger/selfridges-fargatee">Github repo</a></p>
    </div>
  )
}

export default Home
