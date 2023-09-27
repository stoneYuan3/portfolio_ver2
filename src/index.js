import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App, Nav } from './App';
import { Gallery,GalleryNoNav,Playground, AboutMe, Resume } from './pages/pages';
import { worklist_program,worklist_uiux,worklist_art } from './pages/galleryWorkPreview';
import { worklist_isap, worklist_webdev2023, worklist_design2023 } from './pages/galleryWorkPreview';
import { worklist_playground } from './pages/galleryWorkPreview';


import { Riskmap } from './pages/work_articles/programming/riskmap';
import { Garage } from './pages/work_articles/programming/garage';
import { Edusim } from './pages/work_articles/programming/edusim';

import { GardenCom } from './pages/work_articles/uiux/gardencom';
import { GarageDesign } from './pages/work_articles/uiux/garageDesign';

import { CmcSermon } from './pages/work_articles/graphic/cmcSermon';
import { IsaBanner } from './pages/work_articles/graphic/isaBanner';

import { WillFaliure } from './pages/work_articles/film1';

import { JetourMap } from './pages/work_articles/webdev_pmpark/jetourMap';
import { JetourDemo } from './pages/work_articles/webdev_pmpark/jetourDemo';
import { WcwlBadge } from './pages/work_articles/webdev_pmpark/wcwlBadge';

import { BuildingAssetsLogo } from './pages/work_articles/playground/buildingAssetsLogo'
import { EcbcExhibition } from './pages/work_articles/playground/ecbcExhibition'
import { FriendSermonPosters } from './pages/work_articles/playground/friendSermonPosters'
import { ChristianArtistFellowship } from './pages/work_articles/playground/christianArtistFellowship'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>

      {/* default page set */}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/" element={<Nav />}>
        <Route index element={<App content={<Gallery content={worklist_program} page="programming" />} />} />
        
        <Route path="uiux" element={<App content={<Gallery content={worklist_uiux} page="uiux" />} />} />
        <Route path="graphic" element={<App content={<Gallery content={worklist_art} page="graphic" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="playground" element={<App content={<Playground content={worklist_playground}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/playground" />} />} />

        
        <Route path="riskmap" element={<App content={<Riskmap backlink="/" />} />} />
        <Route path="garage" element={<App content={<Garage backlink="/" />} />} />
        <Route path="edusim" element={<App content={<Edusim backlink="/" />} />} />

        <Route path="uiux/gardenCom" element={<App content={<GardenCom backlink="/uiux" />} />} />
        <Route path="uiux/garageDesign" element={<App content={<GarageDesign backlink="/uiux" />} />} />

        <Route path="graphic/cmcSermon" element={<App content={<CmcSermon backlink="/graphic" />} />} />
        <Route path="graphic/isaBanner" element={<App content={<IsaBanner backlink="/graphic" />} />} />
      </Route>


      {/* front-end web development specific page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/webdev" element={<Nav homelink="/webdev"/>}>
        <Route index element={<App content={<GalleryNoNav content={worklist_webdev2023}/>} />} />
        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="jeTourMap" element={<App content={<JetourMap backlink="/webdev" />} />} />
        <Route path="jetourDemo" element={<App content={<JetourDemo backlink="/webdev" />} />} />
        <Route path="wcwlBadge" element={<App content={<WcwlBadge backlink="/webdev" />} />} />
        <Route path="gardenCom" element={<App content={<GardenCom backlink="/webdev" />} />} />
        <Route path="riskmap" element={<App content={<Riskmap backlink="/webdev" />} />} />

        <Route path="playground" element={<App content={<Playground content={worklist_playground}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/webdev/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/webdev/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/webdev/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/webdev/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/webdev/playground" />} />} />
        
      </Route>


      {/* design portfolio page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/design" element={<Nav homelink="/design"/>}>
        <Route index element={<App content={<GalleryNoNav content={worklist_design2023}/>} />} />
        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="gardenCom" element={<App content={<GardenCom backlink="/design" />} />} />
        <Route path="garageDesign" element={<App content={<GarageDesign backlink="/design" />} />} />
        <Route path="isaBanner" element={<App content={<IsaBanner backlink="/design" />} />} />

        <Route path="playground" element={<App content={<Playground content={worklist_playground}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/design/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/design/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/design/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/design/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/design/playground" />} />} />
        
      </Route>


      {/* page set built specifically for a position in spring 2023 */}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/2023isap" element={<Nav homelink="/2023isap"/>}>
        <Route index element={<App content={<GalleryNoNav content={worklist_isap}/>} />} />
        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="riskmap" element={<App content={<Riskmap backlink="/2023isap" />} />} />
        <Route path="garage" element={<App content={<Garage backlink="/2023isap" />} />} />
        <Route path="edusim" element={<App content={<Edusim backlink="/2023isap" />} />} />

        <Route path="gardenCom" element={<App content={<GardenCom backlink="/2023isap" />} />} />
        <Route path="garageDesign" element={<App content={<GarageDesign backlink="/2023isap" />} />} />

        <Route path="cmcSermon" element={<App content={<CmcSermon backlink="/2023isap" />} />} />
        <Route path="isaBanner" element={<App content={<IsaBanner backlink="/2023isap" />} />} />
        
        <Route path="willFaliureFilm" element={<App content={<WillFaliure backlink="/2023isap" />} />} />
      </Route>

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
