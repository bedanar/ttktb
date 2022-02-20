import React from 'react'
import {Section, SectionTitle, Button} from '../../styles'
import {Book} from './Book'
import we from '../../assets/41.jpg'

const books = [
    {
        title: 'Без 41-нче ел балалары',
        subtitle: 'lsnvilnvinvnidfv ifvjdofv ovjdfv dfjvdonvd odvdov dovdfv',
        image: we
    },
    
]

export const Library = () => {
    return(
        <Section>
            <SectionTitle>Китапханә</SectionTitle>
            <ul className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-10'>
                {books.map((book) => {
                    return (
                        <li>
                            <Book title={book.title} subtitle={book.subtitle} image={book.image}/>
                        </li>
                    )
                })}
            </ul>
            <div className="flex items-center justify-center">
                <Button backgroundColor="var(--yellow-color)" 
                    padding="12px 24px" 
                    textSize="18px" 
                    borderRadius="6px" className="font-bold mt-8 ">Тулырак укырга</Button>
            </div>
        </Section>
    )
}