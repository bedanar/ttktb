import React from 'react'
import {Text} from '../../styles'

export const Book = ({title, subtitle, image}) => {
    return (
        <div className='flex'>
            <div className='mr-4'>
                <img src={image} className="h-64 w-96" />
            </div>
            <div>
                <Text textSize="24px">{title}</Text>
                <Text textSize="16px" className="mt-4">{subtitle}</Text>
            </div>
        </div>
    )
}