import React from "react";
import {useState} from "react";
import "../PersonalDetails.css";
const numbers = [1, 2, 3, 4, 5];
// const listItems =numbers.map((number) =>
//     <li>{number}</li>
// );

function MenuItem({menuList}) {
    const listItems=menuList.map((menuList)=>
        <li className={'menu-item'}>
            <button className={'menu-button'}>{menuList}</button>
        </li>
    );
return(
    <>{listItems}</>
    // listItems
    // <li className={'menu-item'}>
    //     <button className={'menu-button'}>{name} 1</button>
    // </li>
);

}


export default MenuItem;