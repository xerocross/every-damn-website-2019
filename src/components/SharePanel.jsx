import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./SharePanel.scss";

class SharePanel extends BaseComponent {
    render () {
        return (
            <div className = "SharePanel" data-testid="SharePanel">
                <img className = "button twitterButton" alt="share on twitter" src = "/icons/twitter.png" />
                <img className = "button facebookButton" alt="share on facebook" src = "/icons/facebook.png" />
                <img className = "button" alt="share on tumblr" src = "/icons/tumblr.png" />
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
export default connect(mapStateToProps, mapDispatchToProps)(SharePanel);