import React from "react";

const NavTabs = () => {
    return (
        <nav>
            <ul id="nav-tabs">
                <a href={"#"}>
                    <li tabIndex={0}>Home</li>{" "}
                </a>
                <a href={"#"}>
                    <li tabIndex={1}>Features</li>
                </a>
                <a href={"#"}>
                    <li tabIndex={2}>Window</li>
                </a>
                <a href={"#"}>
                    <li tabIndex={3}>System</li>
                </a>
                <a href={"#"}>
                    <li tabIndex={4}>Application</li>
                </a>
            </ul>
        </nav>
    );
};

export default NavTabs;
