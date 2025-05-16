import React from "react";
import "./style.css";

function Title({children, size}) {
    return (
        <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>
    );
}

export default Title;
