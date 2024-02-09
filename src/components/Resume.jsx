import React, {useEffect} from "react";
import {useState} from "react";
import {ResumeLeft} from "./ResumeLeft.jsx";
import {ResumeRight} from "./ResumeRight.jsx";
import '../styles/resume.css';

export function Resume({educationMenuList, experienceMenuList, fullName, email, phone, address,}) {

    return (
        <div className={"resume-container"}>
            <ResumeLeft fullName={fullName} email={email} phone={phone} address={address}/>
            <ResumeRight educationMenuList={educationMenuList} experienceMenuList={experienceMenuList}
            />
        </div>

    )
}