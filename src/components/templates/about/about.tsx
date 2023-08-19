'use client'
import React, { FC } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import { AboutPhoto } from '@/constants/images'
import { IcoCircle } from '@/constants/icons'
import { Comfortaa } from 'next/font/google'

const data = [
  'Маю досвід підготовки до вступу в університети Польщі, Німеччини та Англії',
  'В кінці року розбираю з учнями теми вищої математики для успішного старту в університеті',
  'Більше 100 моїх учнів вже навчаються в найкращих університетах України',
  'Поясню все на реальних прикладах з життя, навіть інтеграли:)',
  'Доведу, що математика може бути цікавою, корисною і не такою складною'
]

const comforta = Comfortaa({
  weight: ['700'],
  subsets: ['cyrillic']
})


//component
const About: FC = () => {

  //return
  return (
    <div className={`${styles.about}  ${comforta.className} container`}>
      <div className={styles.about__photo}>
        <div className={styles.about__circle1}>
          <IcoCircle />
        </div>

        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1"></linearGradient>

        <div className={styles.about__circle2}>
          <IcoCircle />
        </div>

        <div className={styles.about__image}>
          <Image src={AboutPhoto} alt={'about me'} />
        </div>
      </div>

      <div className={styles.about__info}>
        {data.map(item =>
          <div className={styles.about__fact} key={item}>
            <div className={styles.about__point}></div>
            <div>{item}</div>
          </div>)}
      </div>
    </div>
  )
}

export default About
