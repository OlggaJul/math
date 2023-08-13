import React, { FC } from 'react'
import styles from './formats.module.scss'
import { PriceCard } from '@/components/ui/price-card'

const Formats: FC = () => {
  return <div className={`${styles.formats} container`}>
    <PriceCard title={'Індивідуальна підготовка до НМТ (ЗНО)'} shortCost={'200'} longCost={'250'} color={'orange'} />
    <PriceCard title={'Групові заняття, підготовка до НМТ (ЗНО)'} longCost={'120'} />
    <PriceCard title={'Індивідуальні уроки для учнів 7-10 класів'} shortCost={'180'} color={'purple'} />
  </div>
}

export default Formats
