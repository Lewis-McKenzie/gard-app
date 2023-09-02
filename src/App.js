import './App.css';
import 'react'
import api from './api/axiosConfig'
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound'


function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
