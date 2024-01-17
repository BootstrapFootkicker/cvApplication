import React from "react";


export function FormTriggerButton({buttonInfo}) {


    return (

        <button className={"menu-button"} onClick={buttonInfo.trigger}>{buttonInfo.name}</button>

    )
}


