
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import History from './pages/History/History';
import Video from './pages/Video/Video';
import Donate from './pages/Donate/Donate';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import News from './pages/News/News';
import OneNews from './pages/News/OneNews/OneNews';
import Login from './pages/LogIn/Login';
import Admin from './pages/admin/Admin';

function App() {
  let admin = localStorage.getItem('admin')
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/history' element={<History />} />
          <Route path='/video' element={<Video />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/news' element={<News />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/news/:id' element={<OneNews/>} />
          { admin && <Route path='/admin' element={<Admin/>} />}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
