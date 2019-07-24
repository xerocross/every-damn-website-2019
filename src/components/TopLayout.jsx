import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./TopLayer.scss";
import MainCopy from "./MainCopy.jsx";
import StickyHeader from "./StickyHeader.jsx";

class TopLayer extends BaseComponent {
    constructor () {
        super();  

    }

    render () {
        return (
            <div className = "TopLayer" data-testid="TopLayer">
                <StickyHeader />
                <main className = "container">
                    <h1>Every Damn Website 2019</h1>
                    <MainCopy />
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(TopLayer);