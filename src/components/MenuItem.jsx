import React from "react";
import { useState } from "react";
import "../forms.css";
import "../dropDown.css";
import { EducationForm } from "./EducationForm.jsx";
import { act } from "react-dom/test-utils";
import { MenuList } from "./MenuList.jsx";
import { InfoButton } from "./InfoButton.jsx";
import { FormTriggerButton } from "./FormTriggerButton.jsx";

// eslint-disable-next-line react/prop-types
export function MenuItem({ item, formToggle, toggleSetter }) {
  // eslint-disable-next-line react/prop-types
  if (item.type === "formButton") {
    return (
      <>
        {!formToggle ? (
          // eslint-disable-next-line react/prop-types
          <li key={item.id} className={"menu-item"}>
            <div className="gap"></div>
            {/* eslint-disable-next-line react/prop-types */}
            <FormTriggerButton buttonInfo={item} />
            {/*<button className={'menu-button'}*/}
            {/*        onClick={item.trigger}>{item.name}</button>*/}
            <div className="gap"></div>
          </li>
        ) : null}
      </>
    );
    // eslint-disable-next-line react/prop-types
  } else if (item.type === "button") {
    return (
      // eslint-disable-next-line react/prop-types
      <>
        {!formToggle ? (
          // eslint-disable-next-line react/prop-types
          <li key={item.id} className={"menu-item"}>
            <div className="gap"></div>
            {/* eslint-disable-next-line react/prop-types */}

            <InfoButton elementInfo={item} createEditForm={toggleSetter} />
            {/*<button className={'menu-button'}*/}
            {/*        onClick={item.trigger}>{item.name}</button>*/}
            <div className="gap"></div>
          </li>
        ) : null}
      </>
    );

    // eslint-disable-next-line react/prop-types
  } else if (item.type === "form") {
    return (
      // eslint-disable-next-line react/prop-types
      <li key={item.id} className={"menu-item"}>
        {/* eslint-disable-next-line react/prop-types */}
        <EducationForm elementInfo={item} />
      </li>
    );
  }

  //todo add statements to support all types of forms
}
