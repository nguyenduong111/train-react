import React, {useContext} from "react";
import {Theme} from "./Theme";


function Item() {

    const {theme, toggleTheme} = useContext(Theme);
    // console.log(Theme);
    let {isLightTheme, light, dark} = theme;
    let style = isLightTheme ? light : dark;


    return (
        <div className="Item">
            <div
                className="Item"
                style={style}
            >
                <h1>nguyen thai duong</h1>
                <h2>(?..__..?)</h2>
            </div>

            <button onClick={toggleTheme} >change theme</button>
        </div>
    );
}

export default Item;
