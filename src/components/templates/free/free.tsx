import React, { FC } from 'react'
import styles from './free.module.scss'
import { IcoFreeLesson } from '@/constants/icons'
import { Contacts } from '@/components/ui/contacts'

//component
const Free: FC = () => {

  //return
  return (
    <div className={`${styles.free} container`}>
      <div className={styles.free__pic}><IcoFreeLesson /></div>

      <div className={styles.free__inner}>
        <div className={styles.free__content}>
          <div className={styles.free__info_title}>
            Запишись на перший безкоштовний урок вже зараз
          </div>

          <div className={styles.free__info_desc}>
            Чудовий спосіб зрозуміти, чи комфортно тобі буде зі мною навчатися та обрати формат навчання.
            На першому занятті я відповім на всі питання щодо процесу навчання, ми визначимо твій рівень знань та
            обговоримо подальші кроки.
          </div>

          <div className={styles.free__contacts}>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Free