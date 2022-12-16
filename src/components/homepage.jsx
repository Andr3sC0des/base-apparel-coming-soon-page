import React from "react";
import Card from "./cardComponent"
import "../css/style.css"

import Attribution from "./attributonComponent";

class Homepage extends React.Component {
    render() {
        return (
            <>
            <Attribution />
            <Card />
            </>
        );
    }
}


export default Homepage