import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <h2 className="frontSkill">Front End</h2>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'90%'}
                        // text={'90%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'90%'}
                        // text={'90%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'85%'}
                        // text={'85%'}
                    />
                    <ProgressBar
                        title={'Bootstrap'}
                        width={'85%'}
                        // text={'85%'}
                    />
                    <ProgressBar
                        title={'ES6+'}
                        width={'80%'}
                        // text={'80%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'80%'}
                        // text={'80%'}
                    />
                    <ProgressBar
                        title={'Angular'}
                        width={'60%'}
                        // text={'60%'}
                    />
                    <ProgressBar
                        title={'Illustrator(Design)'}
                        width={'85%'}
                        // text={'85%'}
                    />
                    <ProgressBar
                        title={'Photoshop(Design)'}
                        width={'85%'}
                        // text={'85%'}
                    />
                </div>
            </InnerLayout>

            <InnerLayout>
                <h2 className="backendSkill">Back End</h2>
                <div className="skills">
                    <ProgressBar
                        title={'PHP'}
                        width={'90%'}
                        // text={'90%'}
                    />
                    <ProgressBar
                        title={'MySQL'}
                        width={'90%'}
                        // text={'90%'}
                    />
                    <ProgressBar
                        title={'NodeJS'}
                        width={'85%'}
                        // text={'85%'}
                    />
                    <ProgressBar
                        title={'MongoDB'}
                        width={'70%'}
                        // text={'70%'}
                    />
                    <ProgressBar
                        title={'Git(Version Control)'}
                        width={'95%'}
                        // text={'95%'}
                    />
                    <ProgressBar
                        title={'Express(server)'}
                        width={'75%'}
                        // text={'75%'}
                    />
                    <ProgressBar
                        title={'Java'}
                        width={'75%'}
                        // text={'75%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .frontSkill{
        font-size: xx-large;
        margin-bottom: 20px;
    }
    .backendSkill{
        font-size: xx-large;
        margin-bottom: 20px;
    }
`;

export default Skills;
