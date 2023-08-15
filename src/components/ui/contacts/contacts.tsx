'use client'
import React, { FC } from 'react'
import styles from './contacts.module.scss'
import { Button } from '@/components/ui/button'
import { IcoTelegram, IcoViber } from '@/constants/icons'

//component
const Contacts: FC = () => {

  //return
  return (
    <div className={styles.contacts}>
      <Button>
        <a target={'_blank'}  rel="noreferrer"  href={'https://forms.gle/5kcWSg1Vvc53PBkk9'}>
          Залишити заявку
        </a>
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