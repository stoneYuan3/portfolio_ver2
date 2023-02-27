import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App } from './App';
import { Gallery, AboutMe, Resume } from './pages/pages';
import { worklist_program,worklist_art } from './pages/galleryWorkPreview';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App content={<Gallery content={worklist_program} />} />} />
      <Route path="/gallery/artwork" element={<App content={<Gallery content={worklist_art} />} />} />

      <Route path="/about" element={<App content={<AboutMe />} />} />
      <Route path="/resume" element={<App content={<Resume />} />} />

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
