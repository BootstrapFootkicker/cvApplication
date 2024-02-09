import React, {useEffect} from "react";
import {useState} from "react";
import '../styles/resume.css';

export function ResumeRight({educationMenuList, experienceMenuList}) {

    return (
        <div className={"resume-right-container"}>
            <div className={'education'}>
                <div className={'bar-divider'}>
                    <div className={'bar-divider-left'}></div>
                    <div className={'bar-divider-right'}></div>
                </div>

                <h1>Education</h1>
                <ul className="bullet-list">
                    {educationMenuList.filter(item => item.elementInfo.name !== '+ Add Education').map((item) => {
                        return (
                            <li className={'education-info'} key={item.elementInfo.id}>
                                <div className={'time-location-div'}>
                                    <div className={'education-date'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.startDate.substring(0, 4) + " - "
                                            + item.elementInfo.formInfo.endDate.substring(0, 4)
                                            : ''}
                                    </div>

                                    <div className={'school-location'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.schoolLocation : ""}
                                    </div>
                                </div>

                                <div className={'styled-separator'}>

                                    |
                                </div>
                                <div className={'job-info-div'}>
                                    <h1 className={'school-name'}>
                                        {item.elementInfo.name}
                                    </h1>

                                    <div className={'degree'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.degree : ""}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={'experience'}>
                <div className={'bar-divider'}>
                    <div className={'bar-divider-left'}></div>
                    <div className={'bar-divider-right'}></div>
                </div>
                <h1>Experience</h1>
                <ul className="bullet-list">
                    {experienceMenuList.filter(item => item.elementInfo.name !== '+ Add Experience').map((item) => {
                        return (

                            <li className={'experience-info'} key={item.elementInfo.id}>
                                <div className={'time-location-div'}>
                                    <div
                                        className={'experience-date'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.startDate.substring(0, 4)
                                            + " - "
                                            + item.elementInfo.formInfo.endDate.substring(0, 4)
                                            : ''}
                                    </div>
                                    <div className={'work-location'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.workLocation : ""}
                                    </div>
                                </div>

                                <div className={'job-info-div'}>
                                    <h1 className={'job-name'}>
                                        {item.elementInfo.name}
                                    </h1>

                                    <div className={'description'}>
                                        {item.elementInfo.formInfo ? item.elementInfo.formInfo.description : ""}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'skills'}>
                <div className={'bar-divider'}>
                    <div className={'bar-divider-left'}></div>
                    <div className={'bar-divider-right'}></div>
                </div>
                <h1>Skills</h1>
            </div>
            <div className={'Notes'}>
                Notes stuff
            </div>
        </div>
    )
}