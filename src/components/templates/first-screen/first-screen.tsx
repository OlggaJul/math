import React, { FC } from 'react'
import styles from './first-screen.module.scss'
import Image from 'next/image'
import { Comfortaa } from 'next/font/google'
import { MainPhoto } from '@/constants/images'
import { IcoGroup1, IcoGroup2, IcoGroup3, IcoSmile } from '@/constants/icons'

const comforta = Comfortaa({
  weight: ['700'],
  subsets: ['cyrillic']
})


//component
const FirstScreen: FC = () => {

  //return
  return (
    <div className={`${styles.first_screen} ${comforta.className} container`}>

      <div className={styles.first_screen__wrapper}>

        <div className={`${styles.first_screen__back_ico} ${styles.smile}`}>
          <IcoSmile />
        </div>
        <div className={`${styles.first_screen__back_ico} ${styles.group1}`}>
          <IcoGroup1 />
        </div>

        <div className={`${styles.first_screen__back_ico} ${styles.group2}`}>
          <IcoGroup2 />
        </div>

        <div className={`${styles.first_screen__back_ico} ${styles.group3}`}>
          <IcoGroup3 />
        </div>

        <div className={`${styles.first_screen__back_ico} ${styles.smile} ${styles.smile}`}>
          <IcoSmile />
        </div>
        <div className={styles.first_screen__content}>
          <h1 className={styles.first_screen__title}>Онлайн курс підготовки <br /> до НМТ з математики</h1>

          <div className={styles.first_screen__description}>
            Не відкладай підготовку на останній місяць, забронюй заняття вже зараз
          </div>

        </div>


        <div className={styles.first_screen__image}>
          <Image
            alt={'Підготовка до нмт та зно репетитор з математики'}
            src={MainPhoto}
          />
        </div>
      </div>

    </div>
  )
}

export default FirstScreen