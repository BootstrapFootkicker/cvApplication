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
    function resetMenuList() {
        setMenuList([{
            type:
                'button', name: "+ Add Education", trigger: educationTrigger, id: uuid()
        }]);
    }

    function educationTrigger() {
        console.log("educationTrigger")
        setEducationClick(!educationClick);
        setMenuList([{type: "form", id: uuid()}])
    }

    const [menuList, setMenuList] = useState([{
        type:
            'button', name: "+ Add Education", trigger: educationTrigger, id: uuid()
    }]);
    const [educationClick, setEducationClick] = useState(false);


    return (
        <>
            <PersonalDetails/>
            <EducationForm/>
            <ExperienceForm/>
            <Dropdown sectionName={"Education"} icon={faGraduationCap} menuList={menuList}/>

            {/*todo play with this*/}

            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    )
}


export default App;

