import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


import AboutPage from "./pages/AboutPage";
import CalendarPage from "./pages/CalendarPage";
import LibraryPage from "./pages/LibraryPage";
import MainPage from './pages/MainPage'
import MediaPage from "./pages/MediaPage";
import PrizePage from "./pages/PrizePage";
import ProjectsPage from "./pages/ProjectsPage";


export default function RouterView () {
    return (
        <Routes>
            <Route path='/' exact>
                <MainPage />
            </Route>
            <Route path='/about'>
                <AboutPage />
            </Route>
            <Route path='/library'>
                <LibraryPage />
            </Route>
            <Route path='/projects'>
                <ProjectsPage />
            </Route>
            <Route path='/prize'>
                <PrizePage />
            </Route>
            <Route path='/media'>
                <MediaPage />
            </Route>
            <Route path='/calendar'>
                <CalendarPage />
            </Route>
        </Routes>
    )
}