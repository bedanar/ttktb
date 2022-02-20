import styled from 'styled-components'
import React from 'react'
import tw from "tailwind-styled-components"


export const Container = styled.div.attrs(props => ({
    type: 'string',
    backgroundColor: props.backgroundColor || '#f5f5f5'
  }))`
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
    background-color: ${props => props.backgroundColor}
  `
  
export const Text = styled.p.attrs(props => ({
    type: 'string',
    textSize: props.textSize || '14px',
    textAlign: props.textAlign || 'left',
  }))`
    font-size: ${props => props.textSize};
    text-align: ${props => props.textAlign};
  `
export const FlexLayout = styled.ul.attrs(props => ({
    type: 'string',
    padding: props.padding || '0',

}))`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: ${props => props.padding};

`
export const Block = styled.div`
    display: block;
    margin: 0;
    padding: 0;
`
export const Navigation = styled.ul.attrs(props => ({
    type: 'string',
    align: props.align || '',
    justify: props.justify || '',
}))`
    align-items: ${props => props.align};
    list-style: none;
    justify-content: ${props => props.justify}
`
export const ListItem = styled.li.attrs(props => ({
    type: 'text',
    marginR: props.marginR || '0',
}))`
    margin-right: ${props => props.marginR};
    cursor: ${props => props.pointer ? "pointer" : ''}
`

export const Link = styled.a.attrs(props => ({
    type: 'text',
    marginR: props.marginR || '0',
    paddingB: props.paddingB || '0'
}))`
    text-decoration: none;
    cursor: pointer;
    margin-right: ${props => props.marginR};
    padding-bottom: $(props => props.paddingB)
`

export const Div = styled.div.attrs(props => ({
    type:'string',
    borderBottom: props.borderBottom || 'none',
    padding: props.padding || '0',

}))`
    border-bottom: ${props => props.borderBottom};
    padding: ${props => props.padding};
`

export const Section  = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 100px
`
export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    @media (min-width: 676px){
        font-size: 36px;
    }
`
export const Button = styled.button.attrs(props =>( {
    type: 'string',
    backgroundColor: props.backgroundColor || 'transparent',
    padding: props.padding || '0',
    textSize: props.textSize || '14px',
    border: props.border || 'none',
    borderRadius: props.borderRadius || '0'
}))`
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    font-size: ${props => props.textSize};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius}
`;
export const ArrowButton = tw.button`
  bg-transparent
  border-2
  py-3
  px-5
  rounded-full
`
