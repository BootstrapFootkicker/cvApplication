import {MenuItem} from "./MenuItem.jsx";
import React from "react";


// eslint-disable-next-line react/prop-types
export function MenuList({menuList, formToggle, toggleSetter, setMenuList}) {
    return (
        <ul className={'menu'}>
            {/* eslint-disable-next-line react/prop-types */}
            {menuList.map((item) => {
                    // eslint-disable-next-line react/jsx-key

                    return (<MenuItem key={item.elementInfo.id} item={item} formToggle={formToggle}
                                      toggleSetter={toggleSetter} setMenuList={setMenuList}/>)
                }
            )}
        </ul>
    )
}

