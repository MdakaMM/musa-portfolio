import React from 'react'
import styled from 'styled-components';
import resume from '../img/musa.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="Musa" />
            </div>
            <div className="right-content">
                <h4>I am <span>Musa Mdaka</span></h4>
                <p className="paragraph">
                    I am an innovative, creative thinker who is adept at coming up with real solutions that work for clients,
                    with experience in a wide variety of software, system architectures and programming languages. I am always
                    current with the latest developments in the software development world through researching and studying.
                    I pride myself on optimizing function and providing solutions that are intuitive, user-friendly, adaptable
                    and effective. I'm eager to learn and to encounter new challenges to gain more experience.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Email</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Musa Mandla Mdaka</p>
                        <p>: mdakamm@gmail.com</p>
                        <p>: South African </p>
                        <p>: English, Xitsonga, Siswati</p>
                        <p>: Gauteng, Centurion</p>
                        <p>: FullStack Developer</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1IifZyeZP8jN-oa6F9aVHVB7O-MufDxso/view" target="_blank" rel="noreferrer"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
