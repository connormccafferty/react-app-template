/* eslint-disable */
import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import PropTypes from "prop-types";

const CLIENT_ID =
    "515932978637-nshbqnbbs7t2tn0onh9o9kr6v1hf6t16.apps.googleusercontent.com";
const CLIENT_SECRET = "YEMegvWbLEo1MvWjLPVvOGTj";

function App({ fin }) {
    const [version, setVersion] = useState("");
    const [authResponse, setAuthResponse] = useState("");

    useEffect(() => {
        async function ofVersion() {
            const v = await fin.System.getVersion();
            setVersion(v);
        }

        ofVersion();

        function openDevTools() {
            const { identity } = fin.Window.getCurrentSync();
            fin.System.showDeveloperTools(identity);
        }

        openDevTools();
    }, []);

    const responseGoogle = response => setAuthResponse(response);

    return (
        <div className="main">
            <div className="logo-container">
                <img src="assets/logo.svg" />
            </div>
            <div>
                <h1>Hello, world!</h1>
                <p>This is a template for an OpenFin React Application</p>
                <p>Current Version: {version}</p>
            </div>
            {authResponse ? (
                <pre>
                    <code>{JSON.stringify(authResponse, null, 4)}</code>
                </pre>
            ) : (
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
            )}
        </div>
    );
}

App.propTypes = {
    fin: PropTypes.object.isRequired
};

export default App;
