import React from "react";
import {useState} from "react";
import "../PersonalDetails.css";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem.jsx";
import PersonalDetails from "./PersonalDetails.jsx";

// const menuList = ["Menu 1", "Menu 2", "Menu 3"];
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

                    {/*<li className={'menu-item'}>*/}
                    {/*    <button className={'menu-button'}>Menu 1</button>*/}
                    {/*</li>*/}
                    {/*<li className={'menu-item'}>*/}
                    {/*    <button className={'menu-button'}>Menu 2</button>*/}
                    {/*</li>*/}
                </ul>) : null}

        </div>
    );
}


export default Dropdown;