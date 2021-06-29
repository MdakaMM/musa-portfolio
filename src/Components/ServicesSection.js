import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'What I Do'} span={'What I Do'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'FullStack Developer, Im comfortable working both in Front and Backend development.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Graphic Design'} 
                            paragraph={'Create Graphics using Adobe Illastrator, Photoshop and XD for website prototype.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Mobile Development'} 
                        paragraph={'Currently learning Mobile Development with React Native.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
