import React from 'react'
import {Text, Button} from '../../styles'
export const Project = ({title, subtitle}) => {
    return (
        <div className='rounded-lg border-2 p-4'>
            <Text textSize="20px">{title}</Text>
            <Text textSize="16px">{subtitle}</Text>
            <Button backgroundColor="var(--yellow-color)" 
                    padding="12px 24px" 
                    textSize="18px" 
                    borderRadius="6px" className="font-bold mt-8">Тулырак укырга</Button>
        </div>
    )
}