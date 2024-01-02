import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App, Nav } from './App';
import { Gallery,GalleryNoNav,GalleryWebdev, Playground, AboutMe, Resume } from './pages/pages';
import { worklist_program,worklist_uiux,worklist_art } from './pages/galleryWorkPreview';
import { worklist_isap,worklist_2024arcTeryx, worklist_webdev2023, worklist_webdev2023_design,worklist_design2023_beyond, worklist_design2023, worklist_2024SAPcomm,worklist_2024SAPcomm_beyond,worklist_2024MotionEnergy,worklist_2024MotionEnergy_beyond } from './pages/galleryWorkPreview';
import { worklist_playground, worklist_playground_arcTeryx, worklist_playground_2 } from './pages/galleryWorkPreview';


import { Riskmap } from './pages/work_articles/programming/riskmap';
import { Garage } from './pages/work_articles/programming/garage';
import { Edusim } from './pages/work_articles/programming/edusim';

import { GardenCom } from './pages/work_articles/uiux/gardencom';
import { GarageDesign } from './pages/work_articles/uiux/garageDesign';
import { NorthsideWeb } from './pages/work_articles/uiux/northsideWeb';

import { CmcSermon } from './pages/work_articles/graphic/cmcSermon';
import { IsaBanner } from './pages/work_articles/graphic/isaBanner';
import { UnSettled } from './pages/work_articles/graphic/unSettledBook';
import { BelgiumMissionPoster } from './pages/work_articles/graphic/belgiumMissionPoster';
import { EDImodule } from './pages/work_articles/graphic/EDImodule'

import { WillFaliure } from './pages/work_articles/film1';

import { JetourMap } from './pages/work_articles/webdev_pmpark/jetourMap';
import { JetourDemo } from './pages/work_articles/webdev_pmpark/jetourDemo';
import { CheryHomePage } from './pages/work_articles/webdev_pmpark/cheryHomePage';
import { WcwlBadge } from './pages/work_articles/webdev_pmpark/wcwlBadge';

import { BuildingAssetsLogo } from './pages/work_articles/playground/buildingAssetsLogo'
import { EcbcExhibition } from './pages/work_articles/playground/ecbcExhibition'
import { FriendSermonPosters } from './pages/work_articles/playground/friendSermonPosters'
import { ChristianArtistFellowship } from './pages/work_articles/playground/christianArtistFellowship'
import { HanfuMaking } from './pages/work_articles/playground/hanfuMaking';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const playgroundRoutes = (backlink, content) => {
  return (
    <>
      <Route path="playground" element={<App content={<Playground content={content}/>} />} />
      <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink={backlink} />} />} />
      <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink={backlink} />} />} />
      <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink={backlink} />} />} />
      <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink={backlink} />} />} />
      <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink={backlink} />} />} />
      <Route path="playground/hanfuMaking" element={<App content={<HanfuMaking backlink={backlink} />} />} />
      <Route path="playground/belgiumMissionPoster" element={<App content={<BelgiumMissionPoster backlink={backlink} />} />} />
    </>
  )
} 

root.render(
  <BrowserRouter>

    <Routes>

      {/* default page set */}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/" element={<Nav />}>
        <Route index element={<App content={<Gallery content={worklist_program} page="main" />} />} />
        
        <Route path="uiux" element={<App content={<Gallery content={worklist_uiux} page="side1" />} />} />
        <Route path="graphic" element={<App content={<Gallery content={worklist_art} page="side2" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        {/* <Route path="playground" element={<App content={<Playground content={worklist_playground}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/playground" />} />} /> */}
        ${playgroundRoutes("/playground",worklist_playground)}
        
        <Route path="riskmap" element={<App content={<Riskmap backlink="/" />} />} />
        <Route path="garage" element={<App content={<Garage backlink="/" />} />} />
        <Route path="edusim" element={<App content={<Edusim backlink="/" />} />} />

        <Route path="jeTourMap" element={<App content={<JetourMap backlink="/" />} />} />
        <Route path="jetourDemo" element={<App content={<JetourDemo backlink="/" />} />} />
        <Route path="wcwlBadge" element={<App content={<WcwlBadge backlink="/" />} />} />
        <Route path="cheryHomePage" element={<App content={<CheryHomePage backlink="/" />} />} />

        <Route path="uiux/northsideWeb" element={<App content={<NorthsideWeb backlink="/uiux" />} />} />
        <Route path="uiux/gardenCom" element={<App content={<GardenCom backlink="/uiux" />} />} />
        <Route path="uiux/garageDesign" element={<App content={<GarageDesign backlink="/uiux" />} />} />

        <Route path="graphic/cmcSermon" element={<App content={<CmcSermon backlink="/graphic" />} />} />
        <Route path="graphic/isaBanner" element={<App content={<IsaBanner backlink="/graphic" />} />} />
        <Route path="graphic/unsettled" element={<App content={<UnSettled backlink="/graphic" />} />} />
        <Route path="graphic/belgiumMissionPoster" element={<App content={<BelgiumMissionPoster backlink="/graphic" />} />} />

        
      </Route>


      {/* front-end web development specific page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/webdev" element={<Nav homelink="/webdev"/>}>
        <Route index element={<App content={<Gallery content={worklist_webdev2023} navType="webdev" page="main" backlink="/webdev"/>} />} />
        <Route path="design" element={<App content={<Gallery content={worklist_webdev2023_design} navType="webdev" page="side1" backlink="/webdev" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="jeTourMap" element={<App content={<JetourMap backlink="/webdev" />} />} />
        <Route path="jetourDemo" element={<App content={<JetourDemo backlink="/webdev" />} />} />
        <Route path="wcwlBadge" element={<App content={<WcwlBadge backlink="/webdev" />} />} />
        <Route path="cheryHomePage" element={<App content={<CheryHomePage backlink="/webdev" />} />} />
        <Route path="riskmap" element={<App content={<Riskmap backlink="/webdev" />} />} />
        <Route path="edusim" element={<App content={<Edusim backlink="/webdev" />} />} />
        <Route path="garage" element={<App content={<Garage backlink="/webdev" />} />} />

        <Route path="design/northsideWeb" element={<App content={<NorthsideWeb backlink="/webdev/design" />} />} />
        <Route path="design/gardenCom" element={<App content={<GardenCom backlink="/webdev/design" />} />} />
        <Route path="design/garageDesign" element={<App content={<GarageDesign backlink="/webdev/design" />} />} />
        <Route path="design/isaBanner" element={<App content={<IsaBanner backlink="/webdev/design" />} />} />
        <Route path="design/unsettled" element={<App content={<UnSettled backlink="/webdev/design" />} />} />
        <Route path="design/willFaliureFilm" element={<App content={<WillFaliure backlink="/webdev/design" />} />} />

        ${playgroundRoutes("/webdev/playground",worklist_playground)}

        
      </Route>


      {/* design portfolio page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/design" element={<Nav homelink="/design"/>}>
        {/* <Route index element={<App content={<GalleryNoNav content={worklist_design2023}/>} />} /> */}
        <Route index element={<App content={<Gallery content={worklist_design2023} navType="design" page="main" backlink="/design"/>} />} />
        <Route path="beyondDesign" element={<App content={<Gallery content={worklist_design2023_beyond} navType="design" page="side1" backlink="/design" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="northsideWeb" element={<App content={<NorthsideWeb backlink="/design" />} />} />
        <Route path="gardenCom" element={<App content={<GardenCom backlink="/design" />} />} />
        <Route path="garageDesign" element={<App content={<GarageDesign backlink="/design" />} />} />
        <Route path="EDImodule" element={<App content={<EDImodule backlink="/design" />} />} />
        <Route path="isaBanner" element={<App content={<IsaBanner backlink="/design" />} />} />
        <Route path="unsettled" element={<App content={<UnSettled backlink="/design" />} />} />

        <Route path="beyondDesign/jetourDemo" element={<App content={<JetourDemo backlink="/design/beyondDesign" />} />} />
        <Route path="beyondDesign/riskmap" element={<App content={<Riskmap backlink="/design/beyondDesign" />} />} />
        <Route path="beyondDesign/edusim" element={<App content={<Edusim backlink="/design/beyondDesign" />} />} />
        <Route path="beyondDesign/willFaliureFilm" element={<App content={<WillFaliure backlink="/design/beyondDesign" />} />} />

        ${playgroundRoutes("/design/playground",worklist_playground)}

      </Route>


      {/* 2024 Moment Energy page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/2024MomentEnergy" element={<Nav homelink="/2024MomentEnergy"/>}>
        {/* <Route index element={<App content={<GalleryNoNav content={worklist_design2023}/>} />} /> */}
        <Route index element={<App content={<Gallery content={worklist_2024MotionEnergy} navType="general" page="main" backlink="/2024MomentEnergy"/>} />} />
        <Route path="others" element={<App content={<Gallery content={worklist_2024MotionEnergy_beyond} navType="general" page="side1" backlink="/2024MomentEnergy" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="northsideWeb" element={<App content={<NorthsideWeb backlink="/2024MomentEnergy" />} />} />
        <Route path="garageDesign" element={<App content={<GarageDesign backlink="/2024MomentEnergy" />} />} />
        <Route path="EDImodule" element={<App content={<EDImodule backlink="/2024MomentEnergy" />} />} />
        <Route path="isaBanner" element={<App content={<IsaBanner backlink="/2024MomentEnergy" />} />} />
        <Route path="unsettled" element={<App content={<UnSettled backlink="/2024MomentEnergy" />} />} />

        <Route path="others/gardenCom" element={<App content={<GardenCom backlink="/2024MomentEnergy/others" />} />} />
        <Route path="others/jetourDemo" element={<App content={<JetourDemo backlink="/2024MomentEnergy/others" />} />} />
        <Route path="others/jeTourMap" element={<App content={<JetourMap backlink="/2024MomentEnergy/others" />} />} />
        <Route path="others/riskmap" element={<App content={<Riskmap backlink="/2024MomentEnergy/others" />} />} />
        <Route path="others/edusim" element={<App content={<Edusim backlink="/2024MomentEnergy/others" />} />} />
        <Route path="others/willFaliureFilm" element={<App content={<WillFaliure backlink="/2024MomentEnergy/others" />} />} />

        ${playgroundRoutes("/2024MomentEnergy/playground",worklist_playground_2)}

      </Route>


      {/* 2024 Arc'Teryx page set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/2024arcTeryx" element={<Nav homelink="/2024arcTeryx"/>}>
        {/* <Route index element={<App content={<GalleryNoNav content={worklist_design2023}/>} />} /> */}
        <Route index element={<App content={<Gallery content={worklist_2024arcTeryx} navType="design" page="main" backlink="/2024arcTeryx"/>} />} />
        <Route path="beyondDesign" element={<App content={<Gallery content={worklist_design2023_beyond} navType="general" page="side1" backlink="/2024arcTeryx" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="gardenCom" element={<App content={<GardenCom backlink="/2024arcTeryx" />} />} />
        <Route path="garageDesign" element={<App content={<GarageDesign backlink="/2024arcTeryx" />} />} />
        <Route path="isaBanner" element={<App content={<IsaBanner backlink="/2024arcTeryx" />} />} />
        <Route path="unsettled" element={<App content={<UnSettled backlink="/2024arcTeryx" />} />} />
        <Route path="hanfuMaking" element={<App content={<HanfuMaking backlink="/2024arcTeryx" />} />} />

        <Route path="beyondDesign/jetourDemo" element={<App content={<JetourDemo backlink="/2024arcTeryx/beyondDesign" />} />} />
        <Route path="beyondDesign/riskmap" element={<App content={<Riskmap backlink="/2024arcTeryx/beyondDesign" />} />} />
        <Route path="beyondDesign/edusim" element={<App content={<Edusim backlink="/2024arcTeryx/beyondDesign" />} />} />
        <Route path="beyondDesign/willFaliureFilm" element={<App content={<WillFaliure backlink="/2024arcTeryx/beyondDesign" />} />} />

        <Route path="playground" element={<App content={<Playground content={worklist_playground_arcTeryx}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/2024arcTeryx/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/2024arcTeryx/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/2024arcTeryx/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/2024arcTeryx/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/2024arcTeryx/playground" />} />} />

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

      {/* 2024 SAP ixp Communications Specialist set*/}
      {/* ///////////////////// */}
      {/* ///////////////////// */}
      <Route path="/2024SAPcomm" element={<Nav homelink="/2024SAPcomm"/>}>
        {/* <Route index element={<App content={<GalleryNoNav content={worklist_design2023}/>} />} /> */}
        <Route index element={<App content={<Gallery content={worklist_2024SAPcomm} navType="general" page="main" backlink="/2024SAPcomm"/>} />} />
        <Route path="others" element={<App content={<Gallery content={worklist_2024SAPcomm_beyond} navType="general" page="side1" backlink="/2024SAPcomm" />} />} />

        <Route path="about" element={<App content={<AboutMe />} />} />

        <Route path="EDImodule" element={<App content={<EDImodule backlink="/2024SAPcomm" />} />} />
        <Route path="unsettled" element={<App content={<UnSettled backlink="/2024SAPcomm" />} />} />
        <Route path="belgiumMissionPoster" element={<App content={<BelgiumMissionPoster backlink="/2024SAPcomm" />} />} />
        <Route path="willFaliureFilm" element={<App content={<WillFaliure backlink="/2024SAPcomm" />} />} />
        {/* <Route path="hanfuMaking" element={<App content={<HanfuMaking backlink="/2024SAPcomm" />} />} /> */}

        <Route path="others/isaBanner" element={<App content={<IsaBanner backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/garageDesign" element={<App content={<GarageDesign backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/gardenCom" element={<App content={<GardenCom backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/jetourDemo" element={<App content={<JetourDemo backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/jeTourMap" element={<App content={<JetourMap backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/riskmap" element={<App content={<Riskmap backlink="/2024SAPcomm/others" />} />} />
        <Route path="others/edusim" element={<App content={<Edusim backlink="/2024SAPcomm/others" />} />} />
        {/* <Route path="beyondDesign/willFaliureFilm" element={<App content={<WillFaliure backlink="/2024SAPcomm/beyondDesign" />} />} /> */}

        <Route path="playground" element={<App content={<Playground content={worklist_playground_arcTeryx}/>} />} />
        <Route path="playground/cmcSermon" element={<App content={<CmcSermon backlink="/2024SAPcomm/playground" />} />} />
        <Route path="playground/buildingAssetsLogo" element={<App content={<BuildingAssetsLogo backlink="/2024SAPcomm/playground" />} />} />
        <Route path="playground/resurrection" element={<App content={<EcbcExhibition backlink="/2024SAPcomm/playground" />} />} />
        <Route path="playground/friendSermonPosters" element={<App content={<FriendSermonPosters backlink="/2024SAPcomm/playground" />} />} />
        <Route path="playground/christianArtistFellowship" element={<App content={<ChristianArtistFellowship backlink="/2024SAPcomm/playground" />} />} />

      </Route>


    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
