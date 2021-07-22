import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import Menu from "./components/Menu";

function App() {

    // cấu hình route
    const showRoutes = (routes) => {
        let result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }

        return result;
    };

    return (
        <Router>
            <div className="App">
                {/* Menu */}
                <Menu />

                {/* nôi dung */}
                <Switch>
                    {/* <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} /> */}

                    {showRoutes(routes)}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
