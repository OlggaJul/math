'use client'
import React, { FC } from 'react'
import styles from './contacts.module.scss'
import { Button } from '@/components/ui/button'
import { IcoTelegram, IcoViber } from '@/constants/icons'
import { Link } from 'react-router-dom'

//component
const Contacts: FC = () => {

  //return
  return (
    <div className={styles.contacts}>
      <Button>
        <Link target={'_blank'} to={'https://forms.gle/5kcWSg1Vvc53PBkk9'}>
          Залишити заявку
        </Link>
      </Button>

      <div className={styles.contacts__social}>
        <div className={styles.contacts__telega}><IcoTelegram /></div>

        <div className={styles.contacts__viber}>
          <IcoViber />
        </div>
      </div>

    </div>
  )
}

export default Contacts