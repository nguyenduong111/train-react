import React, { lazy, Suspense } from "react";
import "./App.css";
// import MyComp from "./components/MyComp";

const MyComp = lazy(() => import("./components/MyComp"));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>hihi,</div>
                <Suspense fallback={<div> Loading... </div>}>
                    <MyComp></MyComp>
                </Suspense>
            </header>
        </div>
    );
}

export default App;
