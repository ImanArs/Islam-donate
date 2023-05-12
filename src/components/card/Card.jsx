import React from 'react'

import styles from './Card.module.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Card = ({title, image, desc, id}) => {
  return (
    <div className={styles.Card}>
      <img src={image} alt="" title='' loading='lazy'/>
      <div className={styles.Card_wrapper}>
        <h3>{title} {id}</h3>
        <p>{desc}</p>
        <Link to={`/news/${id}`}><Button /></Link>
      </div>
    </div>
  )
}

export default Card