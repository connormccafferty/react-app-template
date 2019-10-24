import React from "react";

const Child = ({ increment, count }) => {
    return (
        <>
            <p>Count: {count} </p>
            <button onClick={() => increment()}>+</button>
        </>
    );
};

export default Child;
