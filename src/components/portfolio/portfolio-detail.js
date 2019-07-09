import React from "react";

export default function(props) {
    return(
        <div>
            <h2>portfolio Detail for {props.match.params.slug}</h2>
        </div>
    );
}

