import React, {useEffect} from "react";
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

//Temp state update wont work since states dont update in time, consider togglinmg display instead
function App() {

    useEffect(() => {
    })


    function resetMenuList(id) {
        removeMenuItem(id)
        // console.log(this.id)
        // removeMenuItem(this.id)
    }


    function formSubmit(id) {
        //Maybe add trigger for education check maybe remove
        //tODO ADD   functionality to create button from form info
        addNewMenuItem({
            type: "button", name: "new Education", id: uuid(), trigger: () => {
                console.log("it works!")
            }
        })
        removeMenuItem(id)


    }


    function addNewMenuItem(item) {
        setMenuList(currentMenuList => {
                return [item, ...currentMenuList]
            }
        )
    }


    function removeMenuItem(id) {

        console.log(id)
        setMenuList(currentMenuList => {
                return currentMenuList.filter((item) => item.id !== id)
            }
        )
    }


    function educationTrigger() {
        //todo remove button when adding form
        //todo Make this trigger apply to all forms
        console.log("educationTrigger")

        addNewMenuItem({type: "form", id: uuid(), actions: [formSubmit, resetMenuList]})

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


            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    )
}


export default App;


