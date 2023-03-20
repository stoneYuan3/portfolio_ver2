import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App, Nav } from './App';
import { Gallery,GalleryNoNav, AboutMe, Resume } from './pages/pages';
import { worklist_program,worklist_uiux,worklist_art } from './pages/galleryWorkPreview';
import { worklist_isap } from './pages/galleryWorkPreview';


import { Riskmap } from './pages/work_articles/programming/riskmap';
import { Garage } from './pages/work_articles/programming/garage';
import { Edusim } from './pages/work_articles/programming/edusim';

import { GardenCom } from './pages/work_articles/uiux/gardencom';
import { GarageDesign } from './pages/work_articles/uiux/garageDesign';

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
      <Route path="/" element={<Nav />}>
        <Route index element={<App content={<Gallery content={worklist_program} page="programming" />} />} />
        
        <Route path="uiux" element={<App content={<Gallery content={worklist_uiux} page="uiux" />} />} />
        <Route path="graphic" element={<App content={<Gallery content={worklist_art} page="graphic" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="riskmap" element={<App content={<Riskmap backlink="/" />} />} />
        <Route path="garage" element={<App content={<Garage backlink="/" />} />} />
        <Route path="edusim" element={<App content={<Edusim backlink="/" />} />} />

        <Route path="uiux/gardenCom" element={<App content={<GardenCom backlink="/uiux" />} />} />
        <Route path="uiux/garageDesign" element={<App content={<GarageDesign backlink="/uiux" />} />} />

        <Route path="graphic/cmcSermon" element={<App content={<CmcSermon backlink="/graphic" />} />} />
        <Route path="graphic/isaBanner" element={<App content={<IsaBanner backlink="/graphic" />} />} />
      </Route>


      <Route path="/2023isap" element={<Nav homelink="/2023isap"/>}>
        <Route index element={<App content={<GalleryNoNav content={worklist_isap}/>} />} />
        <Route path="about" element={<App content={<AboutMe />} />} />
      </Route>

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
