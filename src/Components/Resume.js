import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2019 - 2020'}
                        title={'Full Stack Developer'}
                        subTitle={'Ockarsoft(Contract)'}
                        text={'Assisted in testing and deploying Web applications. Integrated new features into existing Web applications. Participated in all stages of the software development life-cycle, from concept, gathering requirements, design, development, testing and deployment.'}
                    />
                    <ResumeItem
                        year={'2018 - 2019'}
                        title={'Software Developer'}
                        subTitle={'Emalangeni Technologies(Intern)'}
                        text={'Troubleshoot issues and propose solutions. Collaborate in the planning, design, development, and deployment of new applications, and enhancements to existing applications. Refactoring, debugging, and implementing changes to existing applications to meet project requirements.'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2015 - 2017'}
                        title={'Bachelor of Science in Information Technology'}
                        subTitle={'Cti Education Group'}
                    />
                    <ResumeItem
                        year={'2013 - 2014'}
                        title={'Higher Certificate in Information Technology (Information Systems)'}
                        subTitle={'Cti Education Group'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
