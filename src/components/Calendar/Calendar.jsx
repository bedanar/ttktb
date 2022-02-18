import React from "react";
import { Section, SectionTitle, Button } from "../../styles";
import Event from './Event'
const events = [
    {
        name: '',
        date: '',
        price: '',
        image: '',
        description: ''
    }
]

export function Calendar () {
    return (
        <Section>
            <SectionTitle>Календарь</SectionTitle>
            <ul className="grid grid-cols-3 gap-6">
                {
                    events.map((e) => {
                        return(
                            <Event key={Math.random()} image={e.image} name={e.name} price={e.price} date={e.date} description={e.description} />
                        )
                    })
                }
            </ul>
            <div className="flex justify-center">
                <Button backgroundColor="var(--yellow-color)" 
                    padding="12px 24px" 
                    textSize="18px" 
                    borderRadius="6px" className="font-bold mt-8 ">Тулырак укырга</Button>
            </div>
        </Section>
    )
}