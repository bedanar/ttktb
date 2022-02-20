import React from 'react'
import { Section, SectionTitle } from '../../styles'
import { Project } from './Project'

const projects = [
    {
        title: 'Дәрдемәнд',
        subtitle: ''
    },
    {
        title: 'Күргәзмә',
        subtitle: ''
    }
]

export const Projects = () => {
    return(
        <Section>
            <SectionTitle>Проектлар</SectionTitle>
            <ul className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-10'>
                {projects.map((project) => {
                    return (
                        <li>
                            <Project title={project.title} subtitle={project.subtitle} />
                        </li>
                    )
                })}
            </ul>
        </Section>
    )
}