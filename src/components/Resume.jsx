import React, {useEffect} from "react";
import {useState} from "react";
import {ResumeLeft} from "./ResumeLeft.jsx";
import {ResumeRight} from "./ResumeRight.jsx";
import '../resume.css';

export function Resume() {

    return (
        <div className={"resume-container"}>
            <ResumeLeft/>
            <ResumeRight/>
        </div>

    )
}