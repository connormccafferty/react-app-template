/* eslint-disable */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import PropTypes from "prop-types";

import Version from "./Version";
import Child from "./Child";
import ChildWindow from "./ChildWindow";

function App({ fin }) {
    const [showChild, setShowChild] = useState(false);
    const [childRef, setChildRef] = useState(null);
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);

    const toggleShowChild = () => {
        setShowChild(!showChild);
    };

    const minimizeChildWindow = () => {
        childRef.minimize();
    };

    return (
        <Router>
            <div className="main">
                <div className="logo-container">
                    <img src="assets/logo.svg" />
                </div>
                <div>
                    <h1>Hello, world!</h1>
                    <p>This is a template for an OpenFin React Application</p>
                    <p>Count: {count}</p>
                    <button onClick={() => toggleShowChild()}>toggle</button>
                    <button onClick={() => minimizeChildWindow()}>+</button>
                    <Link to="/child">child window</Link>
                </div>
            </div>
            {showChild && (
                <ChildWindow
                    fin={fin}
                    windowOptions={{
                        name: "child1",
                        defaultWidth: 500,
                        defaultHeight: 500,
                        waitForPageLoad: true
                    }}
                    setChildRef={setChildRef}
                >
                    <Child increment={increment} count={count} />
                    <p>other child window</p>
                </ChildWindow>
            )}

            <Switch>
                <Route
                    path="/child"
                    render={() => (
                        <ChildWindow
                            fin={fin}
                            windowOptions={{ name: "child" }}
                        >
                            <Child increment={increment} count={count} />
                            <Version fin={fin} />
                        </ChildWindow>
                    )}
                />
            </Switch>
        </Router>
    );
}

App.propTypes = {
    fin: PropTypes.object.isRequired
};

export default App;
