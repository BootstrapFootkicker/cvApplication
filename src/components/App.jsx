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
        setMenuList([...tempMenuList]);
        console.log(menuList)
        console.log("resetMenuList")
    }


    function formSubmit() {
        setMenuList([...tempMenuList, {
            type: "button", name: "Add Education", trigger: () => {
                console.log("it works!")
            }, id: uuid()
        }]);
        console.log("formSubmit");
        setTempMenuList([...menuList])
    }

    function educationTrigger() {

        console.log("educationTrigger")
        setTempMenuList([...menuList]);
        setEducationClick(!educationClick);


        setMenuList([{type: "form", id: uuid(), actions: [formSubmit, resetMenuList]}]);
    }

    const [menuList, setMenuList] = useState([{
        type:
            'button', name: "+ Add Education", trigger: educationTrigger, id: uuid()
    }]);
    const [educationClick, setEducationClick] = useState(false);

    const [tempMenuList, setTempMenuList] = useState([...menuList]);


    return (
        <>
            <PersonalDetails/>
            <EducationForm/>
            <ExperienceForm/>
            <Dropdown sectionName={"Education"} icon={faGraduationCap} menuList={menuList}/>


            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    )
}


export default App;


