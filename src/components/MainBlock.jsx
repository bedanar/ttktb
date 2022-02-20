import React, {useState} from "react";
import styled from "styled-components";
import main from '../assets/main.jpg'
import { p, ArrowButton } from "../styles";

const mainSliderBlocks = [
    {
        title:'Татар китабы йорты',
        subTitle: 'Шәриф Камал исемендәге татар музей-йорты',
        image: {main}
    },
    {
        title:'Шәриф Камал исемендәге беренче ачык язучылар бәйгесе',
        subTitle: 'Шәриф Камал исемендәге татар музей-йорты',
        image: ''
    },
]
export const MainBlock = () => {
    const [slideIndex, setSlideIndex] = useState(1)
	const nextSlideFunction = () => {
		if (slideIndex !== mainSliderBlocks.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === mainSliderBlocks.length) {
			setSlideIndex(1)
		}
	}
	const prevSlideFunction = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(mainSliderBlocks.length)
		}
	}
	const moveDots = (index) => {
		setSlideIndex(index)
	}
    return (
        <div className="py-12 flex items-center justify-between mt-10">
            <ArrowButton onClick={prevSlideFunction} className="hidden md:block"> {"<"} </ArrowButton>
                {mainSliderBlocks.map((m, index) => {
                    return (
                        <div className={slideIndex === index + 1 ? 'block' : 'hidden'}>
                            <iframe src="https://vk.com/video_ext.php?oid=-183652767&id=456239030&hash=ce44654e06cd46f5&hd=2&autoplay=1" 
                                width="569" height="320" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                                frameborder="0" 
                                className="rounded-full hidden md:block"
                                ></iframe>
                                {/* <img className="rounded-full w-2/3 h-96 my-0 mx-auto" src={main} /> */}
                            <p className="font-bold text-2xl md:text-6xl text-center mt-8">
                                {m.title}
                            </p>
                            <p className="text-lg md:text-2xl mt-6 text-center">{m.subTitle}</p>
                        </div>
                    )
                })}
            <ArrowButton onClick={nextSlideFunction} className="hidden md:block"> {">"} </ArrowButton>
        </div>
    )
}