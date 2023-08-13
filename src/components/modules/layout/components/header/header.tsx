'use client'
import React, { FC } from 'react'
import styles from './header.module.scss'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <Logo />
        </div>

        <div className={styles.header__contacts}>
          <Button>
            <Link target={'_blank'} to={'https://forms.gle/5kcWSg1Vvc53PBkk9'}>
              Залишити заявку
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header