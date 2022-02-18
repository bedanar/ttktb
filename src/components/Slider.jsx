import React, {useState} from  'react'
import {ArrowButton} from '../styles'

export default function Slider ({mainSliderBlocks, As}) {
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
        <div className='flex items-center justify-between'>
            <ArrowButton onClick={prevSlideFunction} className="mr-4"> {"<"} </ArrowButton>
                {mainSliderBlocks.map((item, index) => {
                    return (
                        <div className={slideIndex === index + 1 ? 'block' : 'hidden'}>
                            {As === 'img' ? <img src={item} key={Math.random()} className="rounded-2xl" /> : '' }
                        </div>
                    )
                })}
            <ArrowButton onClick={nextSlideFunction} className='ml-4'> {">"} </ArrowButton>
        </div>
    )
}