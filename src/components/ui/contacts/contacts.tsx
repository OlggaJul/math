'use client'
import React, { FC } from 'react'
import styles from './contacts.module.scss'
import { Button } from '@/components/ui/button'
import { IcoTelegram } from '@/constants/icons'

//component
const Contacts: FC = () => {

  //return
  return (
    <div className={styles.contacts}>
      <Button>
        <a target={'_blank'} rel='noreferrer' href={'https://forms.gle/5kcWSg1Vvc53PBkk9'}>
          Залишити заявку
        </a>
      </Button>

      <div className={styles.contacts__social}>
        <a className={styles.contacts__telega} href={'https://t.me/Pavlokhymchak'} target={'_blank'} rel="noreferrer">
          <IcoTelegram />
        </a>

        {/*<a className={styles.contacts__viber} href={'viber://add/?number=%2B380686697108'}>*/}
        {/*  <IcoViber />*/}
        {/*</a>*/}
      </div>

    </div>
  )
}

export default Contacts