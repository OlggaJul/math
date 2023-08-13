'use client'
import React, { FC, useState } from 'react'
import styles from './advantages.module.scss'
import { IcoAdvantChat, IcoAdvantHomework, IcoAdvantTask, IcoAdvantVideo } from '@/constants/icons'
import { Comfortaa } from 'next/font/google'

type Advantages = { id: number, title: string, desc: string }[]

const advantages: Advantages = [
  { id: 0, title: 'Доступ до відеозаписів наших уроків та навчальних матеріалів', desc: 'Зручний кабінет з усіма матеріалами, де я також надсилатиму домашнє завдання' },
  { id: 1, title: 'Розбір шкільного домашнього завдання та контрольних робіт', desc: 'Розберемо складні теми, завдання і покращимо твою успішність в школі' },
  { id: 2, title: "Допомога з складними завданнями в будь-який час", desc: 'Я завжди радий відповісти на запитання, що виникли в ході підготовки та надіслати додаткові матеріали. Просто напиши в наш чат :)' },
  { id: 3, title: 'Безкоштовне додаткове заняття', desc: 'Щотижня проводжу заняття, де ми розбираємо найскладніші для тебе завдання або тему' }
]

const comforta = Comfortaa({
  weight: ['700'],
  subsets: ['cyrillic']
})

//component
const Advantages: FC = () => {
  const [selectedAdvant, setSelectedAdvant] = useState<number>(1)

  //return
  return (
    <div className={`${styles.advantages} container`}>
      <div className={styles.advantages__list}>
        {advantages.map(item =>
          <div onMouseOver ={() => setSelectedAdvant(item.id)} key={item.id} className={styles.advantages__item}>
            <div className={styles.advantages__mobile_pictures}>
              {item.id === 0 && <IcoAdvantVideo />}
              {item.id === 1 && <IcoAdvantHomework />}
              {item.id === 2 && <IcoAdvantChat />}
              {item.id === 3 && <IcoAdvantTask />}
            </div>
            <div className={`${ styles.advantages__item_title }  ${comforta.className}`}>{item.title}</div>
            <div className={styles.advantages__item_desc}>{item.desc}</div>
          </div>
        )}
      </div>

      <div className={styles.advantages__pictures}>
        {selectedAdvant === 0 && <IcoAdvantVideo />}
        {selectedAdvant === 1 && <IcoAdvantHomework />}
        {selectedAdvant === 2 && <IcoAdvantChat />}
        {selectedAdvant === 3 && <IcoAdvantTask />}
      </div>
    </div>
  )
}

export default Advantages
