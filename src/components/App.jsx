import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

import PersonalDetails from "./PersonalDetails.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import Dropdown from "./Dropdown.jsx";
import {v4 as uuid} from "uuid";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
    function educationTrigger() {
        console.log("educationTrigger")
  setEducationClick(!educationClick);
    }

    const [menuList, setMenuList] = useState([{name: "Menu 1", trigger: educationTrigger, id: uuid()}]);
    const [educationClick, setEducationClick] = useState(false);

    function refreshMenu(menuItem = {name: "+ Education", trigger: educationTrigger, id: uuid()}) {
        setMenuList([...menuList, menuItem]);

    }

    return (
        <>
            <PersonalDetails/>
            <EducationForm/>
            <ExperienceForm/>
            <Dropdown sectionName={"Education"} icon={faGraduationCap} menuList={menuList}/>

            {/*todo play with this*/}
            {educationClick? <EducationForm/> : null}
            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    )
}


export default App;