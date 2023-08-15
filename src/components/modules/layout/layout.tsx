'use client'
import React, { FC, ReactNode } from 'react'

import styles from './layout.module.scss'
import { Header } from './components/header'
import { Footer } from '@/components/modules/layout/components/footer'

interface ILayout {
  children: ReactNode;
}

//component
const Layout: FC<ILayout> = ({ children }) => {
  // return
  return (
      <div className={`${styles.layout} `}>
        <div className={styles.layout__first_screen}></div>

        <Header />
        <main className={styles.layout__main}>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
  )
}

export default Layout
