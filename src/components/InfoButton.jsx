import React from "react";
import {useState} from "react";
import "../dropDown.css";

export function InfoButton({elementInfo}) {
    // function buttonTrigger() {
    //     createEditForm(buttonInfo.buttonId, buttonInfo)
    // }

    return (
        <button
            className={"menu-button"}
            onClick={() => {
                elementInfo.trigger(elementInfo.id, elementInfo, elementInfo.triggerType);
            }}
        >
            {elementInfo.name}
        </button>
    );
}