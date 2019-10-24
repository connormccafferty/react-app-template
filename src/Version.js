import React, { useState, useEffect } from "react";

const Version = ({ fin }) => {
    const [version, setVersion] = useState(null);

    useEffect(() => {
        async function ofVersion() {
            const v = await fin.System.getVersion();
            setVersion(v);
        }

        ofVersion();
    }, [fin.System]);

    return <p>Current Version: {version}</p>;
};

export default Version;
