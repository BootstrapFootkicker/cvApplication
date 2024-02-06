import React, {useEffect} from "react";
import {useState} from "react";
import '../resume.css';

export function ResumeLeft({fullName, email, phone, address}) {
    // Now you can use educationMenuList and experienceMenuList in this component
    // Rest of your code
    return (
        <div className={"resume-left-container"}>
            <div className={'resume-left-name-container'}>
                <span className={'full-name'}>{fullName === '' ? 'Your Name' : fullName}</span>
            </div>
            <div className={'personal-info-container'}>

                <div className={"about-me"}>
                    <h1>About me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab est minima mollitia natus nihil
                        repudiandae saepe soluta veniam. Facilis nesciunt, vel? Labore optio qui suscipit
                    </p>
                </div>
                <div className={'contact-div'}>
                    <h1 className={'contact-title'}>CONTACT</h1>
                    <div className={'address-div'}>
                        <span className={'address-title'}>Address</span>
                        <span>{address === '' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab est minima mollitia natus nihil repudiandae saepe soluta veniam. Facilis nesciunt, vel? Labore optio qui suscipit' : address}</span>
                    </div>
                </div>

                <div className={'links-div'}>
                    <span><div>PlaceHolder Image</div>
                        {phone}</span>
                    <span><div>PlaceHolder Image</div>
                        {email}</span>

                </div>
            </div>

        </div>

    )


}
