import React from "react";

export default function Test2(props) {
    const showMessage = () => {
        alert("Followed " + props.time);
    };

    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Function Component</button>;
}
