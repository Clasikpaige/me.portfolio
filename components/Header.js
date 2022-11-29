import React from 'react'
import { HomeButton, Title, Wrapper } from './Header.styles'


const Header = () => {
    return (
        <Wrapper>
            <Title>McKing Burger</Title>
            <HomeButton >Home</HomeButton>
        </Wrapper>
    )
}

export default Header
