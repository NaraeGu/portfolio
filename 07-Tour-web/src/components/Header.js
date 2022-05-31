import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Plane from '../img/flight.png';

const HeaderContainer= styled.div`
    width: 100%;
    height: 220px;
    color: #fff;
    background-color: #6BC4FF;
    text-align: center;

    img {
        padding-top: 40px;
        width: 60px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <NavLink to='/'>
                <img src={`${Plane}`} alt="sample-logo" />
            </NavLink>
            <h1>29 Tour</h1>
        </HeaderContainer>
    );
};

export default Header;