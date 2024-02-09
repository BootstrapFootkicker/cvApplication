import React from "react";
import "../styles/forms.css";
import "../styles/dropDown.css";
import {EducationForm} from "./EducationForm.jsx";
import {InfoButton} from "./InfoButton.jsx"
import {ExperienceForm} from "./ExperienceForm.jsx";
import {FormTriggerButton} from "./FormTriggerButton.jsx";

// eslint-disable-next-line react/prop-types
export function MenuItem({item, formToggle, setFormToggle}) {

    // eslint-disable-next-line react/prop-types
    if (item.elementInfo.type === "formButton") {
        return (
            <>
                {!formToggle ? (
                    // eslint-disable-next-line react/prop-types
                    <li key={item.elementInfo.id} className={"menu-item"}>
                        <div className="gap"></div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <FormTriggerButton buttonInfo={item.elementInfo}/>

                    </li>
                ) : null}
            </>
        );
        // eslint-disable-next-line react/prop-types
    } else if (item.elementInfo.type === "button") {
        return (
            // eslint-disable-next-line react/prop-types
            <>
                {!formToggle ? (
                    // eslint-disable-next-line react/prop-types
                    <li key={item.elementInfo.id} className={"menu-item"}>
                        <div className="gap"></div>
                        {/* eslint-disable-next-line react/prop-types */}

                        <InfoButton elementInfo={item.elementInfo}/>


                    </li>
                ) : null}
            </>
        );

        // eslint-disable-next-line react/prop-types
    } else if (item.elementInfo.type === "education-form") {
        return (
            // eslint-disable-next-line react/prop-types
            <li key={item.elementInfo.id} className={"menu-item"}>
                {/* eslint-disable-next-line react/prop-types */}
                <EducationForm
                    formType={item.elementInfo.formType}
                    formInfo={item.elementInfo.formInfo}
                    formId={item.elementInfo.id}
                    elementInfo={item.elementInfo}
                    setFormToggle={setFormToggle}
                />
            </li>
        );
    } else if (item.elementInfo.type === "experience-form") {
        return (
            // eslint-disable-next-line react/prop-types
            <li key={item.elementInfo.id} className={"menu-item"}>
                {/* eslint-disable-next-line react/prop-types */}
                <ExperienceForm
                    formType={item.elementInfo.formType}
                    formInfo={item.elementInfo.formInfo}
                    formId={item.elementInfo.id}
                    elementInfo={item.elementInfo}
                    setFormToggle={setFormToggle}
                />
            </li>
        );
    }

    //todo add statements to support all types of forms
}
