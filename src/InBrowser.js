import React, { useEffect } from "react";

/* 
for the location change to work without a prompt 
include this JSON:
"protocol_handler":{"excluded_schemes":{"fin":false,"fins":false}}
to the Preferences file located at
%localappdata%\Google\Chrome\User Data\Default
*/

const InBrowser = () => {
    useEffect(() => {
        document.location = "fin://localhost:3000/app.json";
    }, []);

    return (
        <>
            <div>
                The fin API is not available - you are probably running in a
                browser.
            </div>
            <h3>Launching OpenFin Testing App...</h3>
        </>
    );
};

export default InBrowser;
