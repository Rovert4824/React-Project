import React from "react";

export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
        // <div className="card" id="5" styles="{ color: red; font-weigth: 900; }">
        //     <div className="title">
        //         <PortfolioItem title="Quip" url="google.com" />
        //     </div>
        //     <div className="description">
        //         Some details...
        //     </div>
        // </div>
    );
}