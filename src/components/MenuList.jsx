import MenuItem from "./MenuItem.jsx";
import React from "react";

// eslint-disable-next-line react/prop-types
function MenuList({menuList}) {
    return (
        <ul className={'menu'}>
            {/* eslint-disable-next-line react/prop-types */}
            {menuList.map((item) => {
                    // eslint-disable-next-line react/jsx-key
                    return (<MenuItem key={item.id} item={item}/>)
                }
            )}
        </ul>
    )
}

export default MenuList;