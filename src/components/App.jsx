import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

import '../forms.css';
import {PersonalDetails} from "./PersonalDetails.jsx";
import {EducationForm} from "./EducationForm.jsx";
import {ExperienceForm} from "./ExperienceForm.jsx";
import {Dropdown} from "./Dropdown.jsx";
import {Resume} from "./Resume.jsx";
import {v4 as uuid} from "uuid";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InfoButton} from "./InfoButton.jsx";

export function App() {
//todo Pass formtoggle again to forms

    const [educationMenuList, setEducationMenuList] = useState([
        {
            elementInfo: {
                type: "formButton",
                formType: "education",
                name: "+ Add Education",
                trigger: formTrigger,
                id: uuid(),
            },
        },
    ]);
    const [experienceMenuList, setExperienceMenuList] = useState([
        {
            elementInfo: {
                type: "formButton",
                formType: "experience",
                name: "+ Add Experience",
                trigger: formTrigger,
                id: uuid(),
            },
        },
    ]);


    const [experienceFormToggle, setExperienceFormToggle] = useState(false);
    const [educationFormToggle, setEducationFormToggle] = useState(false);


    function resetMenuList(id, stateList) {
        if (stateList === 'education') {
            removeMenuItem(id, setEducationMenuList);
        } else if (stateList === 'experience') {
            removeMenuItem(id, setExperienceMenuList);
        }

    }


    function createEditForm(buttonId, elementInfo, triggerType) {
        toggleForm(triggerType);

        if (triggerType === "education") {
            const newItem = {
                elementInfo: {
                    type: "education-form",
                    formType: "edit",
                    id: uuid(),
                    buttonId: elementInfo.id,
                    actions: {
                        editMenuItem: editMenuItem,
                        resetMenuList: resetMenuList,
                        setFormToggle: toggleForm,
                        removeMenuItem: removeMenuItem,
                        setMenuList: setEducationMenuList
                    },
                    elementInfo: elementInfo,
                    formInfo: elementInfo.formInfo,
                },
            };
            addNewMenuItem(newItem, setEducationMenuList); // set the new item to be added
        } else if (triggerType === "experience") {
            const newItem = {
                elementInfo: {
                    type: "experience-form",
                    formType: "edit",
                    id: uuid(),
                    buttonId: elementInfo.id,
                    actions: {
                        editMenuItem: editMenuItem,
                        resetMenuList: resetMenuList,
                        setFormToggle: toggleForm,
                        removeMenuItem: removeMenuItem,
                        setMenuList: setExperienceMenuList
                    },
                    elementInfo: elementInfo,
                    formInfo: elementInfo.formInfo,
                },
            };
            addNewMenuItem(newItem, setExperienceMenuList); // set the new item to be added

        }


    }


    function editMenuItem(buttonId, formId, elementInfo, triggerType) {
        console.log("editMenuItem", buttonId, formId, elementInfo);


        if (triggerType === "education") {

            const newItem = {
                elementInfo: {
                    type: "button",
                    name: elementInfo.school,
                    id: uuid(),
                    trigger: createEditForm,
                    formInfo: elementInfo,
                    triggerType: triggerType
                }
            }

            setEducationMenuList((currentMenuList) => {
                const updatedMenuList = currentMenuList.map((item) =>
                    item.elementInfo.id === buttonId ? newItem : item
                );
                return updatedMenuList;
            });


        } else if (triggerType === "experience") {

            const newItem = {
                elementInfo: {
                    type: "button",
                    name: elementInfo.companyName,
                    id: uuid(),
                    trigger: createEditForm,
                    formInfo: elementInfo,
                    triggerType: triggerType
                }
            }
            setExperienceMenuList((currentMenuList) => {
                const updatedMenuList = currentMenuList.map((item) =>
                    item.elementInfo.id === buttonId ? newItem : item
                );
                return updatedMenuList;
            });


        }
    }


    function formSubmit(formId, name, formInfo, triggerType) {

        if (triggerType === "education") {

            addNewMenuItem({
                elementInfo: {
                    type: "button",
                    name: name,
                    id: uuid(),
                    trigger: createEditForm,
                    formInfo: formInfo,
                    triggerType: triggerType
                },
            }, setEducationMenuList);
            removeMenuItem(formId, setEducationMenuList);

        } else if (triggerType === "experience") {
            addNewMenuItem({
                elementInfo: {
                    type: "button",
                    name: name,
                    id: uuid(),
                    trigger: createEditForm,
                    formInfo: formInfo,
                    triggerType: triggerType
                },
            }, setExperienceMenuList);
            removeMenuItem(formId, setExperienceMenuList);
        }
        toggleForm(triggerType)
    }

    function addNewMenuItem(item, stateList) {
        stateList((currentMenuList) => {
            let newList = [...currentMenuList];
            newList.splice(newList.length - 1, 0, item);
            return newList;
        });
    }

    function removeMenuItem(id, stateList) {
        console.log(stateList, 'stateList')
        stateList((currentMenuList) => {
            const updatedMenuList = currentMenuList.filter((item) => item.elementInfo.id !== id);
            return updatedMenuList;
        });
    }

    function experienceTrigger() {
        console.log("experienceTrigger");
        toggleForm('experience');
        addNewMenuItem({
            elementInfo: {
                type: "experience-form",
                formType: "add",
                id: uuid(),
                actions: {
                    formSubmit: formSubmit,
                    resetMenuList: resetMenuList,
                    toggleForm: toggleForm,
                    removeMenuItem: removeMenuItem,
                    setMenuList: setExperienceMenuList
                },
            },
        }, setExperienceMenuList);
    }

    function educationFormTrigger() {
        console.log("educationTrigger");
        toggleForm('education');
        addNewMenuItem({
            elementInfo: {
                type: "education-form",
                formType: "add",
                id: uuid(),
                actions: {
                    formSubmit: formSubmit,
                    resetMenuList: resetMenuList,
                    toggleForm: toggleForm,
                    removeMenuItem: removeMenuItem,
                    setMenuList: setEducationMenuList
                },
            },
        }, setEducationMenuList);
    }

    function formTrigger(type) {
        console.log("formTrigger");
        if (type === "education") {
            educationFormTrigger();
        } else if (type === "experience") {
            experienceTrigger();
        }


    }

    function toggleForm(triggerType) {
        console.log("toggleForm", triggerType);
        if (triggerType === "education") {
            setEducationFormToggle(!educationFormToggle);
        } else if (triggerType === "experience") {
            setExperienceFormToggle(!experienceFormToggle);
        }


    }

    return (
        <>
            <div className={'details-container'}>

                <PersonalDetails/>
                <Dropdown
                    sectionName={"Education"}
                    icon={faGraduationCap}
                    menuList={educationMenuList}
                    formToggle={educationFormToggle}
                    setFormToggle={setEducationFormToggle}

                />
                <Dropdown
                    sectionName={"Experience"}
                    icon={faBriefcase}
                    menuList={experienceMenuList}
                    formToggle={experienceFormToggle}
                    setFormToggle={setExperienceFormToggle}

                />


            </div>
            <Resume/>
        </>
    );
}
