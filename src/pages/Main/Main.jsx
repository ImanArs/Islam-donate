import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Main.module.scss'
import SliderSwiper from './components/SliderSwiper'
import Card from '../../components/card/Card'

const Main = () => {
  const [dataState, setDataState] = useState({ data: null})
  const [firstThreeData, setFirstThreeData] = useState( null )
  const getData = async() => {
    try {
      const response = await axios.get('https://636a27e5b10125b78fd2189a.mockapi.io/islam-donate/')
      setDataState(prevState => ({ ...prevState, data: response.data }));
      setFirstThreeData(response.data.reverse().slice(0,3))
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <section className={styles.Home}>
        <section className={styles.Home_heroUSSR}>
          <article className={styles.Home_heroUSSR__top}>
            <h1>Международный общественный фонд имени <span>"Героя Советского Союза Исмаилбека Таранчиева"</span></h1>
            <img src="https://i.pinimg.com/originals/22/df/46/22df468e75cc1a12c666b6f0297022c5.jpg" alt="" />
          </article>
        </section>
        <section className={styles.Home_aboutUs}>
        <article className='mt-[100px]'>
          <h2>О нас</h2>
          <div className={styles.Home_aboutUs__wrapper}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab neque doloremque aliquid deleniti! Porro placeat ducimus aspernatur! Ea est, ratione totam veritatis atque voluptate non deleniti explicabo, eius et dolores velit esse dignissimos necessitatibus consectetur dolore quod, tempora aliquid reiciendis. Nemo at eveniet aut asperiores. Dolorem fugiat et est.</p>
            <img src="https://z.mil.ru/images/upload/2019/fruivenvguerbuigveu4.jpg" className='w-[400px]' alt="" />
          </div>
        </article>
        <Link>Узнать больше</Link>
      </section>

      <SliderSwiper />
      <section className={styles.Home_heroMerit}>
        <article className={styles.Home_heroMerit__left}>
          <img src="https://z.mil.ru/images/upload/2019/fruivenvguerbuigveu4.jpg" alt="" />
        </article>
        <article className={styles.Home_heroMerit__right}>
          <h2>Заслуги героя</h2>
          <p>В Красной Армии с июня 1941 года. В 1943 году окончил 3-ю Чкаловскую военную авиационную школу пилотов. В боях Великой Отечественной войны с января 1944 года. Член ВКП(б)/КПСС с 1944 года.</p>
          <p>Лётчик 566-го штурмового авиационного полка (277-я штурмовая авиационная дивизия, 13-я воздушная армия, Ленинградский фронт) младший лейтенант Исмаилбек Таранчиев к 18 марта 1944 года произвёл на самолёте «Ил-2» тридцать пять успешных боевых вылетов на штурмовку оборонительных сооружений, техники, живой силы, железных дорог, аэродромов и других вражеских объектов.</p>
          <Link to='/history'><button>Подробнее</button></Link>
        </article>
      </section>
      
      <section className={styles.Home_heroHelp}>
        <article className={styles.Home_heroHelp__top}>
          <h2>Помощь нашему герою!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus possimus ex ea quasi at est consequuntur laboriosam? Repudiandae praesentium rerum velit earum ullam cupiditate officia neque nesciunt vitae. Natus tenetur officiis hic fuga labore voluptates et quibusdam optio perspiciatis temporibus sint dolorum vitae eveniet non qui, at voluptate laboriosam.</p>
        </article>
        <article className={styles.Home_heroHelp__bottom}>
          <img src="https://i.pinimg.com/originals/ae/fe/18/aefe1819d34cc2ddee350edc02e0fea0.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/b4/b8/e9/b4b8e946e0f2ea996c5a8650015ad628.jpg" alt="" />
          <img src="https://i.pinimg.com/originals/ae/fe/18/aefe1819d34cc2ddee350edc02e0fea0.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/b4/b8/e9/b4b8e946e0f2ea996c5a8650015ad628.jpg" alt="" />
          <img src="https://i.pinimg.com/originals/ae/fe/18/aefe1819d34cc2ddee350edc02e0fea0.jpg" alt="" />
        </article>
      </section>
      <section className={styles.Home_news}>
        <article>
          <h2>Новости</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque itaque officia magnam dolore? Voluptas aspernatur ad in repellat repellendus.</p>
            <div className={styles.Home_news__wrapper}>
              {
                firstThreeData?.map(item => (
                  <Card key={item.id} image={item.image} title={item.title} desc={item.desc} id={item.id} />
                ))
              }
            </div>
            <Link to='/news' ><button>Смотреть все новости</button></Link>
        </article>
      </section>
      <section className={styles.Home_video}>
        <article>
          <h2>Видео</h2>
          <div className='flex justify-evenly'>
            {
              firstThreeData?.map(item => (
                <Card key={item.id} image={item.image} title={item.title} desc={item.desc} id={item.id} />
              ))
            }
          </div>
        </article>
      </section>
      <section></section>
    </section>
  )
}

export default Main