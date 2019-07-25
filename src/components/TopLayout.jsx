import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import MainCopy from "./MainCopy.jsx";
import StickyHeader from "./StickyHeader.jsx";
import EmbeddedVideo from "./EmbeddedVideo.jsx";
import SharePanel from "./SharePanel.jsx";
import SubscribeModal from "./SubscribeModal.jsx";
import QAHelper from "../qa-helper.js";
import CookiePermission from "./CookiePermission.jsx";
import "./TopLayout.scss";

class TopLayout extends BaseComponent {
    constructor () {
        super();
        let autoplayVal = QAHelper.exists("no-autoplay") ? false : true;
        this.state = {
            autoplay : autoplayVal
        }
    }

    component
    render () {
        return (
            <div className = "TopLayer" data-testid="TopLayer">
                <StickyHeader />
                <EmbeddedVideo 
                    autoplay = {this.state.autoplay}
                />
                <SharePanel />
                <SubscribeModal />
                <main className = "container">
                    <h1>Every Damn Website 2019</h1>
                    <MainCopy />
                </main>
                <CookiePermission />
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
export default connect(mapStateToProps, mapDispatchToProps)(TopLayout);