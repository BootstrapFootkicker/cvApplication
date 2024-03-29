import React from "react";
import {useState} from "react";
import "../styles/dropDown.css";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuList} from "./MenuList.jsx";
import {PersonalDetails} from "./PersonalDetails.jsx";

export function Dropdown({
                             sectionName,
                             icon,
                             menuList,
                             formToggle,
                             setFormToggle,
                             dropDownOpen,
                             setOtherDropDownOpen,
                             setDropdownOpen,

                         }) {
    const [open, setOpen] = useState(false);

    // const toggle = () => setOpen(!open);
    const toggle = () => {
        setDropdownOpen(!dropDownOpen)
        setOtherDropDownOpen(false)
    };

    return (
        <div className={"dropdown"}>
            <button className={"dropdown-button"} onClick={toggle}>
                <div className={"button-content"}>
                    <div className={"icon-container"}>
                        <FontAwesomeIcon icon={icon}/>
                        <p>{sectionName}</p>
                    </div>


                    <div className={"icon-container"}>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </div>
            </button>
            {dropDownOpen ? (
                <MenuList
                    menuList={menuList}
                    sectionName={sectionName}
                    formToggle={formToggle}
                    setFormToggle={setFormToggle}
                />
            ) : null}
        </div>
    );
}
