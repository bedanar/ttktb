import React from "react";
import { Header } from "../components/Header";
import { MainBlock } from "../components/MainBlock";
import {AboutMuseum} from '../components/AboutMuseum'
import {AboutSH} from '../components/AboutSH'
import { Projects } from "../components/Projects/Projects";
import { Library } from "../components/Library/Library";
import {Calendar} from '../components/Calendar/Calendar'
import Footer from "../components/Footer";
export default function MainPage () {
    return (
        <div> 
            <MainBlock />
            <AboutMuseum />
            <AboutSH />
            <Projects />
            <Library />
            <Calendar />
        </div>
    )
}