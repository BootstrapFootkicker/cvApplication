import React from "react";
import {useState} from "react";
import "../PersonalDetails.css";


function Dropdown() {
    const [open, setOpen] = useState(false);
    return (<div className={'dropdown'}>
            <button className={"dropdown-button"}
                    onClick={() => setOpen(!open)}>{open.toString() + " "} DropDown
            </button>
            {open ? (
                <ul className={'menu'}>
                    <li className={'menu-item'}>
                        <button className={'menu-button'}>Menu 1</button>
                    </li>
                    <li className={'menu-item'}>
                        <button className={'menu-button'}>Menu 2</button>
                    </li>
                </ul>) : null}

        </div>
    );
}


export default Dropdown;