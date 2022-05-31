import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    color: #fff;
    background-color: #337ab7;
    text-align: center;

    p {
        padding-top: 40px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>API 연동 * 리액트 라이브러리</p>
        </FooterContainer>
    );
};

export default Footer;