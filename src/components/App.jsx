import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

import { PersonalDetails } from "./PersonalDetails.jsx";
import { EducationForm } from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import { Dropdown } from "./Dropdown.jsx";
import { v4 as uuid } from "uuid";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoButton } from "./InfoButton.jsx";

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

  useEffect(() => {
    console.log(formToggle);
  });

  function createAddButton(title, trigger) {
    return { type: "button", name: title, trigger: trigger, id: uuid() };
  }

  function resetMenuList(id) {
    removeMenuItem(id);
  }

  function submitEditForm(formId, formInfo, targetId) {}

  function createEditForm(buttonId, elementInfo) {
    toggleForm();
    addNewMenuItem({
      type: "form",
      id: uuid(),
      actions: [submitEditForm, resetMenuList],
      elementInfo: elementInfo,
    });
  }

  function formSubmit(formId, name, id) {
    addNewMenuItem({
      elementInfo: {
        type: "button",
        name: name,
        id: id,
        trigger: createEditForm,
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
        id: uuid(),
        actions: [
          formSubmit,
          resetMenuList,
          setFormToggle,
          removeMenuItem,
          setMenuList,
        ],
      },
    });
  }

  function toggleForm() {
    console.log("toggleForm");
    setFormToggle(!formToggle);
  }

  return (
    <>
      <PersonalDetails />
      <EducationForm />
      <ExperienceForm />
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
