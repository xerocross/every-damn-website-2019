import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./StickyHeader.scss";

class StickyHeader extends BaseComponent {
    render () {
        return (
            <div className = "StickyHeader" data-testid="StickyHeader">

                <a href="/" className = "title">Every Damn Website</a>
                <a href="/">About</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(StickyHeader);