import React from 'react'
import styles from './page.module.css'
import { HomePage } from '@/components/modules/home-page'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}
