'use client'
import React, { FC } from 'react'
import styles from './header.module.scss'
import { Logo } from '@/components/ui/logo'
import { Contacts } from '@/components/ui/contacts'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <Logo />
        </div>

        <div className={styles.header__contacts}>
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default Header
