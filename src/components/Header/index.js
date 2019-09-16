import React from 'react'
import Nav from './Nav'
import Searchbar from './Searchbar'
import { HeaderStyle } from './style'
const Header = () => {
  return (
    <HeaderStyle>
      <Nav></Nav>
      <Searchbar></Searchbar>
    </HeaderStyle>
  )
}

export default Header
