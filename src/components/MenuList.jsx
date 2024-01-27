import {MenuItem} from "./MenuItem.jsx";
import React, {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export function MenuList({menuList, formToggle, setMenuList, setFormToggle}) {


// Inside MenuList component
    useEffect(() => {
        console.log(formToggle, "formToggle is changed");
    }, [formToggle]);
    return (
        <ul className={'menu'}>
            {/* eslint-disable-next-line react/prop-types */}
            {menuList.map((item) => {
                    // eslint-disable-next-line react/jsx-key

                    return (<MenuItem key={item.elementInfo.id} item={item} formToggle={formToggle}
                                      setFormToggle={setFormToggle} setMenuList={setMenuList}/>)
                }
            )}
        </ul>
    )
}

