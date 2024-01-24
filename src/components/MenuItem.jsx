import React from "react";
import {useState} from "react";
import "../forms.css";
import "../dropDown.css";
import {EducationForm} from "./EducationForm.jsx";
import {act} from "react-dom/test-utils";
import {MenuList} from "./MenuList.jsx";
import {InfoButton} from "./InfoButton.jsx"
import {FormTriggerButton} from "./FormTriggerButton.jsx";

// eslint-disable-next-line react/prop-types
export function MenuItem({item, formToggle, toggleSetter}) {

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
                        {/*<button className={'menu-button'}*/}
                        {/*        onClick={item.trigger}>{item.name}</button>*/}
                        <div className="gap"></div>
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

                        <div className="gap"></div>
                    </li>
                ) : null}
            </>
        );

        // eslint-disable-next-line react/prop-types
    } else if (item.elementInfo.type === "form") {
        return (
            // eslint-disable-next-line react/prop-types
            <li key={item.elementInfo.id} className={"menu-item"}>
                {/* eslint-disable-next-line react/prop-types */}
                <EducationForm
                    formType={item.elementInfo.formType}
                    formInfo={item.elementInfo.formInfo}
                    formId={item.elementInfo.id}
                    elementInfo={item.elementInfo}
                />
            </li>
        );
    }

    //todo add statements to support all types of forms
}
