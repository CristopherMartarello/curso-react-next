import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" Component={App} exact></Route>
        <Route path="/abc/:slug?/:id?" Component={Abc}></Route>
        <Route path="*" Component={Page404}></Route>
      </Routes>
      {/*Routes é o cara que vai escolher a rota pra gente, que melhor dá match*/}
    </BrowserRouter>
  </React.StrictMode>,
);
