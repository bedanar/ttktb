import React from 'react'
import {Text} from '../../styles'
export default function Event ({name, date, price, image, description}) {
    return (
        <div className=''>
            <div>
                <img src={image} />
            </div>
            <div className="flex items-center">
                <div className='text-base text-secondary'>{date}</div>
                <div className='text-lg text-secondary font-bold'>{price}</div>
            </div>
            <Text textSize='24px'>{name}</Text>
            <Text textSize='16px'>{description}</Text>
        </div>
    )
}