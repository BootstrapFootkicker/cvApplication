import React from "react";
import {useState} from "react";
import "../dropDown.css";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem.jsx";
import PersonalDetails from "./PersonalDetails.jsx";


function Dropdown({sectionName, icon,menuList}) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (<div className={'dropdown'}>
            <button className={"dropdown-button"}
                    onClick={toggle}>
                <div className={'icon-container'}>
                    <FontAwesomeIcon icon={icon}/>
                </div>

                <p>{sectionName}</p>
                <div className={'icon-container'}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>

            </button>
            {open ? (
                <ul className={'menu'}>
                    <MenuItem menuList={menuList}/>
                </ul>) : null}

        </div>
    );
}


export default Dropdown;