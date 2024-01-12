import React from "react";
import {useState} from "react";
import "../forms.css";
import EducationForm from "./EducationForm.jsx";
import {act} from "react-dom/test-utils";
import MenuList from "./MenuList.jsx";


// eslint-disable-next-line react/prop-types
function MenuItem({item, formToggle, toggleSetter}) {

    console.log(formToggle)
    console.log("menu item")

    // eslint-disable-next-line react/prop-types
    if (item.type === 'button') {


        return (
            // eslint-disable-next-line react/prop-types
            <>
                {!formToggle ? (
                    <li key={item.id} className={'menu-item'}>
                        <div className='gap'></div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <button className={'menu-button'}
                                onClick={item.trigger}>{item.name}</button>
                        <div className='gap'></div>
                    </li>) : null}
            </>
        )

        // eslint-disable-next-line react/prop-types
    } else if (item.type === 'form') {


        return (

            // eslint-disable-next-line react/prop-types
            <li key={item.id} className={'menu-item'}>
                {/* eslint-disable-next-line react/prop-types */}
                <EducationForm id={item.id} actions={item.actions} toggleSetter={toggleSetter}/>
            </li>)
    }


//todo add statements to support all types of forms
}

export default MenuItem;