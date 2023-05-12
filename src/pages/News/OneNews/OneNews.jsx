import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const OneNews = () => {

  const {id} = useParams();
    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(true)

    const getNews = async() => {
      try {
        let response = await axios.get(`https://636a27e5b10125b78fd2189a.mockapi.io/islam-donate/${id}`)
        setNews(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getNews()
    }, [])

  return (
    <div>
      <h3>{news.title}</h3>
      <img src="https://i.pinimg.com/originals/22/df/46/22df468e75cc1a12c666b6f0297022c5.jpg" alt="" />
      <p>{news.desc}</p>

      <button>Пожертвовать Герою Войны</button>
    </div>
  )
}

export default OneNews