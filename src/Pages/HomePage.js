import React from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Musa Mdaka</span></h1>
                <p>
                    A dedicated and energetic individual with 2 years working experience, plus 1 
                    year freelancing, seeking to join a fast pased organisation as a Software Developer to contribute to the
                    delivery of quality software solutions by applying interpersonal skills andknowledge of program design.
                </p>
                <div className="icons">
                    <a href="https://github.com/MdakaMM?tab=repositories" target="_blank" className="icon i-github" rel="noreferrer">
                        <GithubIcon />
                    </a>
                   <a href="https://www.linkedin.com/in/musa-mdaka-9a3721185/" target="_blank" className="icon i-linkedin" rel="noreferrer">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
