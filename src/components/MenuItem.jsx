import React from "react";
import {useState} from "react";
import "../forms.css";

function MenuItem({menuList}) {

    const listItems = menuList.map((menuList) =>
        <li className={'menu-item'} key={menuList.id}>
            <button className={'menu-button'} onClick={menuList.trigger}>{menuList.name}</button>
        </li>
    );
    return (
        <>{listItems}</>
    );
}


export default MenuItem;