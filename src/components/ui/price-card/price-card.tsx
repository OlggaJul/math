'use client'
import React, { FC, useState } from 'react'
import styles from './price-card.module.scss'
import { Contacts } from '@/components/ui/contacts'
import { Comfortaa } from 'next/font/google'

interface Props {
  title: string
  shortCost?: string
  longCost?: string
  color?: string
}

const description = [' до 6 осіб', 'тривалість 90 хв']

const comforta = Comfortaa({
  weight: ['700'],
  subsets: ['cyrillic']
})


//component
const PriceCard: FC<Props> = ({ title, shortCost, longCost, color }) => {
  const [amount, setAmount] = useState<number>(8)
  const [duration, setDuration] = useState<number>(shortCost ? 60 : 90)

  //return

  return <div
    className={`${styles.price_card} ${color === 'orange' && styles.orange} ${color === 'purple' && styles.purple}`}>

    <div
      className={`${styles.price_card__title} ${color === 'orange' && styles.orange} ${color === 'purple' && styles.purple} ${comforta.className}`}>{title}</div>

    <div className={styles.price_card__info}>
      <div className={styles.price_card__options}>
       <div>
         Кількість уроків
       </div>

        <div className={styles.price_card__btns}>
          <div className={`${styles.price_card__btn} ${amount === 1 && styles.active}`} onClick={() => setAmount(1)}>
            1 заняття
          </div>
          <div className={`${styles.price_card__btn} ${amount === 8 && styles.active}`} onClick={() => setAmount(8)}>
            8 занять
          </div>
        </div>

      </div>

      <div className={styles.price_card__duration}>
       <div>
         Тривалість уроків
       </div>

        <div className={styles.price_card__btns}>
          {shortCost && <div className={`${styles.price_card__btn} ${duration === 60 && styles.active}`}
                             onClick={() => setDuration(60)}>60хв</div>}

          {longCost && <div className={`${styles.price_card__btn} ${duration === 90 && styles.active}`}
                            onClick={() => setDuration(90)}>90хв
          </div>}
        </div>

      </div>

      <div className={styles.price_card__desc}>
        {description.map(item =>
          <div key={item} className={styles.price_card__desc_item}>
            <div className={styles.price_card__point}></div>
            <div>{item}</div>
          </div>)}
      </div>
    </div>

    <div className={styles.price_card__prices}>
      {shortCost && longCost && <div className={styles.price_card__price_main}>
        {amount === 1 ? (duration === 90 ? longCost : shortCost) : (duration === 90 ? (+(longCost) - 20) : +(shortCost) - 20)} грн
        / заняття
      </div>}

      {!shortCost && longCost && <div className={styles.price_card__price_main}>
        {amount === 1 ? longCost : (+(longCost) - 20)} грн / заняття
      </div>}

      {shortCost && !longCost && <div className={styles.price_card__price_main}>
        {amount === 1 ? shortCost : (+(shortCost) - 20)} грн / заняття
      </div>}


      {amount === 8 && <div className={styles.price_card__price}>
        {duration === 90 && longCost ? ((+(longCost) - 20) * 8) : ((+(shortCost || 0) - 20) * 8)}грн / 8 занять
      </div>}
    </div>

    <div className={styles.price_card__contacts}>
      <Contacts />
    </div>
  </div>
}

export default PriceCard
