import React, {useEffect} from "react";
import {useState} from "react";
import '../resume.css';

export function ResumeRight() {

    return (
        <div className={"resume-right-container"}>
            <div className={'education'}>
                Education stuff
            </div>

            <div className={'experience'}>
                Experience Stuff
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