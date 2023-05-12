import React from 'react'

import styles from './Button.module.scss'

const Button = ({text = 'подробнее'}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button