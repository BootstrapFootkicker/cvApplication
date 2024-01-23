import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

import {PersonalDetails} from "./PersonalDetails.jsx";
import {EducationForm} from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import {Dropdown} from "./Dropdown.jsx";
import {v4 as uuid} from "uuid";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InfoButton} from "./InfoButton.jsx";

export function App() {
    //todo change functions to have elementInfo:{} format!

    const [menuList, setMenuList] = useState([
        {
            elementInfo: {
                type: "formButton",
                name: "+ Add Education",
                trigger: educationTrigger,
                id: uuid(),
            },
        },
    ]);
    const [formToggle, setFormToggle] = useState(false);

    const [newItem, setNewItem] = useState(null);

    useEffect(() => {
        if (newItem) {
            addNewMenuItem(newItem);
            setNewItem(null); // reset newItem after adding
        }
    }, [newItem]);


    function resetMenuList(id) {
        removeMenuItem(id);
    }

    function submitEditForm(formId, formInfo, targetId) {
    }

    function createEditForm(buttonId, elementInfo) {
        console.log("createEditForm is called");
        toggleForm()
        const newItem = {
            elementInfo: {
                type: "form",
                formType: "edit",
                id: uuid(),
                actions: [submitEditForm, resetMenuList],
                elementInfo: elementInfo,
                formInfo: elementInfo.formInfo,
            },
        };
        setNewItem(newItem); // set the new item to be added
    }


    function formSubmit(formId, name, id, formInfo) {
        console.log('Trigger function: ', createEditForm);
        addNewMenuItem({
            elementInfo: {
                type: "button",
                name: name,
                id: id,
                trigger: createEditForm,
                formInfo: formInfo,
            },
        });

        removeMenuItem(formId);
    }

    function addNewMenuItem(item) {
        setMenuList((currentMenuList) => {
            return [item, ...currentMenuList];
        });
    }

    function removeMenuItem(id) {
        console.log(id + " removed");
        setMenuList((currentMenuList) => {
            return currentMenuList.filter((item) => item.elementInfo.id !== id);
        });
    }

    function findMenuItem(id) {
        return menuList.find((item) => item.elementInfo.id === id);
    }

    //todo Make all prop name consistent across components

    function findMenuItemIndex(id) {
        return menuList.findIndex((item) => item.elementInfo.id === id);
    }

    function editMenuItem(id, elementInfo) {
        let index = findMenuItemIndex(id);
        let item = {
            type: "button",
            name: elementInfo.name,
            id: uuid(),
            elementInfo: elementInfo,
            trigger: editMenuItem,
        };
        setMenuList((currentMenuList) => {
            return [
                ...currentMenuList.slice(0, index),
                item,
                ...currentMenuList.slice(index + 1),
            ];
        });
    }

    function educationTrigger() {
        //todo Make this trigger apply to all forms
        console.log("educationTrigger");
        toggleForm();
        addNewMenuItem({
            elementInfo: {
                type: "form",
                formType: "add",
                id: uuid(),
                actions: {
                    formSubmit: formSubmit,
                    resetMenuList: resetMenuList,
                    setFormToggle: setFormToggle,
                    removeMenuItem: removeMenuItem,
                    setMenuList: setMenuList
                },
            },
        });
    }

    function toggleForm() {
        console.log("toggleForm");
        setFormToggle(!formToggle);
    }

    return (
        <>

            <Dropdown
                sectionName={"Education"}
                icon={faGraduationCap}
                menuList={menuList}
                formToggle={formToggle}
                toggleSetter={setFormToggle}
            />
            <button onClick={toggleForm}>test</button>

            {/*<Dropdown sectionName={"Experience"} icon={faBriefcase} menuList ={menuList}/>*/}
        </>
    );
}
