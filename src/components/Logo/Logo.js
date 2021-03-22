import React from 'react'
import logo from '../../LogoAS.png'

const Logo = (props) => {
    return <img src={logo} width={props.width} style={{ margin: '0 auto' }} />
}

export default Logo
