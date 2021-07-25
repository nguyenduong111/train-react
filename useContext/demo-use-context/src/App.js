import "./App.css";
import React from "react";
import Item from "./components/Item";
import ThemeContextProvider from "./components/Theme";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Item />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
