import React from "react";
import {useState} from "react";
import "../dropDown.css";

export function InfoButton({elementInfo}) {
    const handleClick = () => {
        elementInfo.trigger(elementInfo.id, elementInfo);
    };

    return (
        <button
            className={"menu-button"}
            onClick={handleClick}
        >
            {elementInfo.name}
        </button>
    );
}