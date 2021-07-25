import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Items from "./components/Items";

function App() {
    let [healthFacility, setHealthFacility] = useState([]);

    useEffect(() => {
        axios.get("http://45.13.132.247:8082/schedule").then((response) => {
            let arrInfo = [];
            response.data.data.forEach((elem) => {
                arrInfo.push(elem.placeInfo.healthFacility);
            });
            setHealthFacility(
                (healthFacility = arrInfo.filter((elem) => elem != null))
            );
        });
        
    }, []);

    return (
        <div className="App">
            <h1>Danh sách các bệnh viện</h1>
            <div className="row">
                <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 ">
                    <Items inFos={healthFacility} />
                </div>
            </div>
        </div>
    );
}

export default App;
