import React from 'react'
import { FlexLayout, Block, Text, Link, ListItem, Navigation } from '../styles'
import { NavLink } from 'react-router-dom'
import mail from '../assets/mail_wh.svg'
import instagram from '../assets/instagram_wh.svg'
import telegram from '../assets/telegram_wh.svg'


import logo from '../assets/logo.png'


const navbarList = [
    // 'Баш бит', "Шәриф Камал турында", "Шәриф Камал Премиясе", "Китапханә", "Проектлар", "Календарь", "Медиахаб", "Контактлар"
    {
        name: 'Баш бит',
        url: '/'
    },
    {
        name: 'Шәриф Камал турында',
        url: '/sharif-kamal'
    },
    {
        name: 'Шәриф Камал Премиясе',
        url: '/prize'
    },
    
    {
        name: 'Китапханә',
        url: '/library'
    },
    {
        name: 'Проектлар',
        url: '/projects'
    },
    {
        name: 'Календарь',
        url: '/calendar'
    },
    {
        name: 'Медиахаб',
        url: '/media'
    },
    {
        name: 'Контактлар',
        url: '/'
    },
]
export default function Footer() {
    return (
        <footer className='bg-black mt-20 p-16 text-white' >
            <FlexLayout padding="10px">
                <Block>
                    <img className="w-20 hidden md:block" src={logo} alt="Logotype"  />
                </Block>
                <FlexLayout backgroundColor = "#f0d387">
                    <Link marginR="15px" className='mr-6 font-bold hidden md:block' href="https://go.2gis.com/kpn465l">Казан шәһәре, Островский урамы, 15</Link>
                    <Link marginR="15px"><img src={mail} /></Link>
                    <Link marginR="15px"><img src={instagram} /></Link>
                    <Link><img src={telegram} /></Link>
                </FlexLayout>
            </FlexLayout>
            <Navigation align="center" className='hidden lg:flex' justify="space-between">{
                navbarList.map((n) => {
                    return (
                        <ListItem marginR = "15px" paddingB="4px" pointer className="hover:border-b-2 hover:border-amber-400">
                            <NavLink to={n.url} className="hover:text-white hover:no-underline">{n.name}</NavLink>
                        </ListItem>
                    )
                })
            }
            </Navigation>
        </footer>
    )
}