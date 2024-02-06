import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

import '../forms.css';
import {PersonalDetails} from "./PersonalDetails.jsx";
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

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


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
    const [resumeEducationList, setResumeEducationList] = useState([]);
    const [resumeExperienceList, setResumeExperienceList] = useState([]);

    useEffect(() => {
        console.log(resumeEducationList);
    }, [resumeEducationList]);

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

            setResumeEducationList([...educationMenuList, newItem])


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
        let newItem = {
            elementInfo: {
                type: "button",
                name: name,
                id: uuid(),
                trigger: createEditForm,
                formInfo: formInfo,
                triggerType: triggerType
            },
        };

        if (triggerType === "education") {
            setEducationMenuList((currentMenuList) => {
                let updatedMenuList = [...currentMenuList];
                updatedMenuList.splice(updatedMenuList.length - 1, 0, newItem);

                setResumeEducationList(updatedMenuList);

                return updatedMenuList;
            });
            removeMenuItem(formId, setEducationMenuList);
            toggleForm(triggerType);
        } else if (triggerType === "experience") {
            setExperienceMenuList((currentMenuList) => {
                let updatedMenuList = [...currentMenuList];
                updatedMenuList.splice(updatedMenuList.length - 1, 0, newItem);

                setResumeExperienceList(updatedMenuList)

                return updatedMenuList;
            });
            removeMenuItem(formId, setExperienceMenuList);
            toggleForm(triggerType);
        }
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
            if (stateList === setEducationMenuList) {
                setResumeEducationList(updatedMenuList);
            } else if (stateList === setExperienceMenuList) {
                setResumeExperienceList(updatedMenuList);
            }
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

                <PersonalDetails
                    fullName={fullName}
                    setFullName={setFullName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                />

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
            <Resume educationMenuList={resumeEducationList} experienceMenuList={resumeExperienceList}
                    fullName={fullName} email={email} phone={phone} address={address}
            />
        </>
    );
}
