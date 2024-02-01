import React, {useEffect} from "react";
import {useState} from "react";
import '../resume.css';

export function ResumeLeft() {
    // Now you can use educationMenuList and experienceMenuList in this component
    // Rest of your code
    return (
        <div className={"resume-left-container"}>
            <div className={'resume-left-name-container'}>
                Your name
            </div>
            <div className={'personal-info-container'}>

                <div className={"about-me"}>
                    About me
                </div>
                <div className={'contact-div'}>
                    Contact info
                    Address
                </div>

                <div className={'links-div'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptas!
                </div>
            </div>

        </div>

    )


}
