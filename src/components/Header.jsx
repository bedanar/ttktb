import React, { useState } from "react";
import styled from "styled-components";
import mail from '../assets/mail.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import logo from '../assets/logo.png'
import {Div, FlexLayout, Block, Link, Navigation, ListItem, Button} from '../styles'
import { NavLink } from "react-router-dom";
import burger from '../assets/burger.svg'
import close from '../assets/close.svg'
const navbarList = [
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

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Div borderBottom="1px solid #cacaca" padding="30px">
            <FlexLayout padding="10px">
                <Block>
                    <img className="w-20" src={logo} alt="Logotype"  />
                </Block>
                <FlexLayout backgroundColor = "#f0d387">
                    <Link marginR="15px" className='mr-4 font-bold hidden md:block' href="https://go.2gis.com/kpn465l">Казан шәһәре, Островский урамы, 15</Link>
                    <Link marginR="15px"><img src={mail} /></Link>
                    <Link marginR="15px"><img src={instagram} /></Link>
                    <Link><img src={telegram} /></Link>
                    <Button onClick={() => setIsMenuOpen(true)} className="lg:hidden ml-5">
                        <img src={burger}  />
                    </Button>
                </FlexLayout>
            </FlexLayout>
            <Navigation className="hidden lg:flex" align="center" justify="space-between">{
                navbarList.map((n) => {
                    return (
                        <ListItem marginR = "15px" paddingB="4px" pointer className="hover:border-b-2 hover:border-amber-400">
                            <NavLink to={n.url} className="hover:text-black hover:no-underline">{n.name}</NavLink>
                        </ListItem>
                    )
                })
            }
            </Navigation>
            {
                isMenuOpen && <MobileNavigation setIsMenuOpen={setIsMenuOpen} />
            }
        </Div>
    )
}

const MobileNavigation = ({setIsMenuOpen}) => {
    return (
        <Navigation className="flex bg-white absolute top-0 left-0 w-full h-full p-10" align="start" justify="space-between">
            <div>
                {
                    navbarList.map((n) => {
                        return (
                            <ListItem marginR = "15px" paddingB="4px" pointer className="hover:border-b-2 hover:border-amber-400 mb-6">
                                <NavLink to={n.url} className="hover:text-black hover:no-underline">{n.name}</NavLink>
                            </ListItem>
                        )
                    })
                }
            </div>
            <Button onClick={() => setIsMenuOpen(false)}>
                <img src={close} />
            </Button>
        </Navigation>
    )
}