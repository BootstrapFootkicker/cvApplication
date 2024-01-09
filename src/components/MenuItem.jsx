import React from "react";
import {useState} from "react";
import "../forms.css";
import EducationForm from "./EducationForm.jsx";
import {act} from "react-dom/test-utils";


function MenuItem({menuList}) {

    return (
        menuList.map((menuList) => {

            if (menuList.type === 'button') {

                return (
                    <li key={menuList.id} className={'menu-item'}>
                        <div className='gap'></div>
                        <button className={'menu-button'} onClick={menuList.trigger}>{menuList.name}</button>
                        <div className='gap'></div>
                    </li>
                )
            } else if (menuList.type === 'form') {

                return (

                    <li key={menuList.id} className={'menu-item'}>
                        <EducationForm actions={menuList.actions}/>
                    </li>)

            }

        })
    )

}

export default MenuItem;