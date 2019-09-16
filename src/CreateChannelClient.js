import React from "react";
import PropTypes from "prop-types";

function CreateChannelClient({ fin }) {
    async function handleClick() {
        await fin.Window.create({
            name: `child-${new Date(Date.now()).toTimeString().slice(0, 8)}`,
            url: "http://localhost:3000",
            defaultWidth: 320,
            defaultHeight: 320,
            autoShow: true
        });
    }

    return <button onClick={handleClick}>Create Channel Client</button>;
}

CreateChannelClient.propTypes = {
    fin: PropTypes.object.isRequired
};

export default CreateChannelClient;
