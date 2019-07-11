import React, {Component} from  "react";

import PortfolioContainer from "../portfolio/portfolio-container";

export default class Home extends Component {

    
    render() {
        console.log("Rendering");

        return (
            <PortfolioContainer />
        );
    }
}