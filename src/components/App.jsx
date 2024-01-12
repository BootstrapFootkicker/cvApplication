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

//Temp state update wont work since states  dont update in time, consider togglinmg display instead
function App() {

    function buttonEdit(formInfo) {
        //todo figure out way to edit button using form and existing info, Consider making this work for different types of forms i.e if this use this info
    }

    useEffect(() => {
        console.log(formToggle)
    })


    function createAddButton(title, trigger) {
        return {type: "button", name: title, trigger: trigger, id: uuid()}
    }

    function resetMenuList(id) {
        removeMenuItem(id)
    }


    function formSubmit(id, formInfo) {
        addNewMenuItem({
            type: "button", name: formInfo.name, id: uuid(), formInfo: formInfo, trigger: () => {
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
        //todo Make this trigger apply to all forms
        console.log("educationTrigger")
        toggleForm()
        addNewMenuItem({type: "form", id: uuid(), actions: [formSubmit, resetMenuList]})

    }

    function toggleForm() {
        console.log("toggleForm")
        setFormToggle(!formToggle)

    }

    const [menuList, setMenuList] = useState([{
        type:
            'button', name: "+ Add Education", trigger: educationTrigger, id: uuid()
    }]);
    const [formToggle, setFormToggle] = useState(false);


    return (
        <>
            <PersonalDetails/>
            <EducationForm/>
            <ExperienceForm/>
            <Dropdown sectionName={"Education"} icon={faGraduationCap} menuList={menuList} formToggle={formToggle}
                      toggleSetter={setFormToggle}/>
            <button onClick={toggleForm}>test</button>

            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    )
}


export default App;


