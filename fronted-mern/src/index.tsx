import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify'

// IMPORTAMOS REACT ROUTER DOM  
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';


import 'react-toastify/dist/ReactToastify.css'
// IMPORTAR BOOTSWATCH , SIMILAR AL BOOTSTRAP (SAME)
// import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>

          <Navbar/>
     <div className="container p-5">
        <Switch>
          <Route exact path="/" component={VideoList}></Route>
          <Route path="/new-video" component={VideoForm}></Route>
          <Route path="/update/:id" component={VideoForm}></Route>
        </Switch>
        {/* DA EL AVISO (AGREGADO) */}
          <ToastContainer/>
        </div>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
