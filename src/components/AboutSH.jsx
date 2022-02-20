import React from "react";
import { Section, SectionTitle, Text, Button } from "../styles";
import sh1 from '../assets/sh1.JPG'
import sh2 from '../assets/sh2.jpg'

const fatcs = [
    {
        title: 'Шәриф Камалның тормыш тасфиры, 1920 - 1940',
        subtitle: '',
        image: sh1
    },
    {
        title: 'Одесса шәһәре күрнеше, 1901',
        subtitle: '',
        image: sh2
    },
    {
        title: 'Одесса шәһәре күрнеше, 1901',
        subtitle: '',
        image: sh2
    },
]

export const AboutSH = () => {
    return (
        <Section>
            <div>
                <SectionTitle>Шәриф Камал турында</SectionTitle>
                <ul className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
                    {fatcs.map((fact) => {
                        return (
                            <li className="rounded-lg">
                                <img src={fact.image} className="w-full h-96 rounded-lg" />
                                <Text textSize="18px" className="mt-4">{fact.title}</Text>
                                <Text textSize="16px">{fact.subtitle}</Text>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center justify-center">
                    <Button backgroundColor="var(--yellow-color)" 
                    padding="12px 24px" 
                    textSize="18px" 
                    borderRadius="6px" className="font-bold mt-8">Тулырак укырга</Button>
                </div>
            </div>
        </Section>
    )
}