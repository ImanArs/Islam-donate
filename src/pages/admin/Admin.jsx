import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import Card from '../../components/card/Card'
import styles from './Admin.module.scss'

const Admin = () => {
  const [lastNews, setLastNews] = useState(null);
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState('')
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    desc: "",
  });
  // console.log(formData);
  const getNews = useMemo(() => {
    return async () => {
      try {
        let response = await axios.get('https://636a27e5b10125b78fd2189a.mockapi.io/islam-donate/')
        setLastNews(response.data[response.data?.length - 1])
      } catch (error) {
        console.log(error);   
      }
    }
  }, [])
  useEffect(() => {
    getNews()
  }, [])
// слушатели событий инпутов
  const handleInputChange = (event) => { //на все инпуты
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => { // на инпут file
    const file = event.target.files[0];
    setFormData({
      image: file,
    });
  };

  const handleSubmit = async (event) => { // слушатель на отправку формы 
    event.preventDefault()
    try {
      const formDataToSend = new FormData()
        formDataToSend.append("image", formData.image); // Добавляем файл в FormData
        formDataToSend.append("title", formData.title);
        formDataToSend.append("desc", formData.desc);

      console.log(formDataToSend);

        const response = await axios.post( "https://636a27e5b10125b78fd2189a.mockapi.io/islam-donate/", formDataToSend);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      // setTimeout(()=> window.location.reload(), 1500)
      
    };
  return (
    <div className={styles.admin}>
      <div className={styles.admin_left}>
        <h3>добавить новость</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, deleniti.</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="file"
            name="image" 
            id="image"
            onChange={handleFileChange}
          />
          <input
            type="text"
            id="title"
            name="title"
            value={formData.name}
            onChange={handleInputChange}
          />
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.admin_right}>
        <h3>последняя новость</h3>
        {lastNews && (
          <Card title={lastNews.title} desc={lastNews.desc} id={lastNews.id}/>
        )}
      </div>
    </div>
  )
}

export default Admin