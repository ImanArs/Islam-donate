import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import styles from './News.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

const News = () => {
  const [news, setNews] = useState( { data: null })
  const [lastNews, setLastNews] = useState( { data: null })
    const getNews = async() => {
      try {
        let response = await axios.get('https://636a27e5b10125b78fd2189a.mockapi.io/islam-donate/')
        setNews( prevState => ({...prevState, data: response.data}))
        setLastNews(response.data[response.data?.length - 1])
      } catch (error) {
        console.log(error);   
      }
    }
  useEffect(() => {
    getNews()
  }, [])
  return (
    <section className={styles.News}>
      <section className={styles.News_top}>
          <h2>Новое</h2>
        <article>
          {lastNews && (
            <div className={styles.News_top__lastNews}>
              <div className={styles.News_top__lastNews_left}>
                <h3>{lastNews.title}</h3>
                <p>{lastNews.desc}</p>
                <Link to={`/news/${lastNews.id}`}><Button/></Link>
              </div>
              <img src="https://i.pinimg.com/originals/22/df/46/22df468e75cc1a12c666b6f0297022c5.jpg" alt="" />
            </div>
          )}
        </article>
      </section>
      <article className={styles.News_wrapper}>
        {
          news.data?.map(item => (
            <div className={styles.News_wrapper__card}  key={item.id}>
              <Card title={item.title} desc={item.desc} id={item.id} />
            </div>
          ))
        }
        </article>
    </section>
  )
}

export default News