import React, { useState } from 'react'
import styles from './Login.module.scss'
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [isValid, setIsValid] = useState(false)
  localStorage.setItem('admin', isValid)
  // const history = useHistory();
  const handleSubmit = () => {
    if (login === 'login' && password == '0000') {
      setIsValid(true)
      console.log('правильные данные');
    } else {
      console.log('не правильные данные');
      setIsValid(false)
    }
  }
  console.log(isValid);


  
  const handleButtonClick = (e) => {
    // e.preventDefault()
  };
  return (
    <section className={styles.login}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="inputLogin">login</label>
        <input type="text" id='inputLogin' placeholder='login' onChange={e => setLogin(e.target.value)}/>
        <label htmlFor="inputPassword">password</label>
        <input type="password" id='inputPassword' placeholder='password' onChange={e => setPassword(e.target.value)}/>
        <button text='войти' onClick={handleButtonClick}>войти</button>
      </form>
      {isValid ? <Navigate to="/admin" />: ""} 
    </section>
  )
}

export default Login