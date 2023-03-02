import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App } from './App';
import { Gallery, AboutMe, Resume } from './pages/pages';
import { worklist_program,worklist_art } from './pages/galleryWorkPreview';

import { Riskmap } from './pages/work_articles/programming/riskmap';
import { Garage } from './pages/work_articles/programming/garage';
import { Edusim } from './pages/work_articles/programming/edusim';

import { CmcSermon } from './pages/work_articles/graphic/cmcSermon';
import { IsaBanner } from './pages/work_articles/graphic/isaBanner';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App content={<Gallery content={worklist_program} page="programming" />} />} />
      <Route path="/gallery/graphic" element={<App content={<Gallery content={worklist_art} page="graphic" />} />} />

      <Route path="/about" element={<App content={<AboutMe />} />} />
      <Route path="/resume" element={<App content={<Resume />} />} />


      <Route path="/work/riskmap" element={<App content={<Riskmap />} />} />
      <Route path="/work/garage" element={<App content={<Garage />} />} />
      <Route path="/work/edusim" element={<App content={<Edusim />} />} />

      <Route path="/work/cmcSermon" element={<App content={<CmcSermon />} />} />
      <Route path="/work/isaBanner" element={<App content={<IsaBanner />} />} />

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
