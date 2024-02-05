import React, {useEffect} from "react";
import {useState} from "react";
import '../resume.css';

export function ResumeRight({educationMenuList, experienceMenuList}) {

    return (
        <div className={"resume-right-container"}>
            <div className={'education'}>
                <h1>Education</h1>
                <ul className="bullet-list">
                    {educationMenuList.filter(item => item.elementInfo.name !== '+ Add Education').map((item) => {
                        return (
                            <li className={'education-info'} key={item.elementInfo.id}>
                                <div className={'education-date'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.startDate + " -- "
                                        + item.elementInfo.formInfo.endDate
                                        : ''}
                                </div>
                                <div className={'school-location'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.schoolLocation : ""}
                                </div>
                                <h1 className={'school-name'}>
                                    {item.elementInfo.name}
                                </h1>

                                <div className={'degree'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.degree : ""}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'experience'}>
                <h1>Experience</h1>
                <ul className="bullet-list">
                    {experienceMenuList.filter(item => item.elementInfo.name !== '+ Add Experience').map((item) => {
                        return (
                            <li className={'experience-info'} key={item.elementInfo.id}>
                                <div
                                    className={'experience-date'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.startDate
                                        + " -- "
                                        + item.elementInfo.formInfo.endDate
                                        : ''}</div>
                                <div className={'work-location'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.workLocation : ""}
                                </div>

                                <h1 className={'job-name'}>
                                    {item.elementInfo.name}
                                </h1>

                                <div className={'degree'}>
                                    {item.elementInfo.formInfo ? item.elementInfo.formInfo.description : ""}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'skills'}>
                Skills stuff
            </div>
            <div className={'Notes'}>
                Notes stuff
            </div>
        </div>
    )
}