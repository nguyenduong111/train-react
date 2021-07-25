import React, {createContext, useState} from "react";
// import Item from "./Item";

export const Theme = createContext();

const ThemeContextProvider = ({children}) => {
    // state
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            background: "#d5d5d5",
            color: "black"
        },
        dark: {
            background: "#333",
            color: "#fff"
        }
    });

    
    // thay đổi isLightTheme
    const toggleTheme = (data) => {
        console.log(data);
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        });
    };
    
    // Context data
    const themeContextData = {
        theme,
        toggleTheme
    };

    // return provider
    return(
        <Theme.Provider value={themeContextData} >
            {children}
            {/* <Item /> */}
        </Theme.Provider>
    );

}

export default ThemeContextProvider;

















