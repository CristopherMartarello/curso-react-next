import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Post />}></Route>
        <Route path="/posts" element={<Post />}>
          <Route path=":id" element={<div>Oi</div>}></Route>
        </Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
