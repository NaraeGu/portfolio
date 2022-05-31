import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

import Koreatour from '../img/koreatour.jpg';
import Pettour from '../img/pettour.jpg';
import Roadtour from '../img/roadtour.jpg';

const MainContainer = styled.div`
    .item-wrap {
        margin: 60px auto 0;
        margin-bottom: 60px;
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .item {
            margin: 0 0;
        }

        img {
            height: auto;
            width: 100%;
        }
    }
`;

const Main = () => {
    return (
        <MainContainer>
            <div className="item-wrap">
                <div className="item">
                <Card>
                    <NavLink to="/portfolio/07-Tour-web/travel">
                        <Image 
                            src={`${Koreatour}`}
                            wrapped ui={false}
                        />
                    </NavLink>
                    <Card.Content>
                        <Card.Header>아름다운 국내 관광지 8000</Card.Header>
                        <Card.Meta>
                            <span className="date">Korea Tour</span>
                        </Card.Meta>
                        <Card.Description>
                            이재이
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="!#">
                            <Icon name="user" />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                </div>
                <div className="item">
                <Card>
                    <NavLink to="/portfolio/07-Tour-web/pettravel">
                    <Image
                        src={`${Pettour}`}
                        wrapped
                        ui={false}
                    />
                    </NavLink>
                    <Card.Content>
                        <Card.Header>강원도 반려동물 동반 관광지</Card.Header>
                        <Card.Meta>
                            <span className="date">Pet Tour</span>
                        </Card.Meta>
                        <Card.Description>
                            구나래
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="!#">
                            <Icon name="user" />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                </div>
                <div className="item">
                <Card>
                <NavLink to="/portfolio/07-Tour-web/loadtour">
                    <Image
                        src={`${Roadtour}`}
                        wrapped
                        ui={false}
                    />
                    </NavLink>
                    <Card.Content>
                        <Card.Header>로드투어 두루누비</Card.Header>
                        <Card.Meta>
                            <span className="date">Road Tour</span>
                        </Card.Meta>
                        <Card.Description>
                            구본아
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="!#">
                            <Icon name="user" />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                </div>
            </div>
        </MainContainer>
    );
};

export default Main;
