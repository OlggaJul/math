import React, { FC } from 'react'
import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div>
          Не відкладай підготовку на останній місяць, забронюй перше заняття вже зараз!
        </div>
      </div>
    </div>
  )
}

export default Footer
