import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./EmbeddedVideo.scss";
import EmbeddedVideoUrl from "../helpers/embedded-video-url.js";
import { HIDE_EMBEDDED_VIDEO } from "../actions.js";

class EmbeddedVideo extends BaseComponent {
    constructor() {
        super();
        this.close = this.close.bind(this);
    }
    close(e) {
        e.preventDefault();
        console.log("click!");
        this.props.HIDE_EMBEDDED_VIDEO();
    }
    render () {
        let self = this;
        let src = EmbeddedVideoUrl.getURL(this.props.autoplay);
        return (
            <div className = {"EmbeddedVideo" + (!self.props.showEmbeddedVideo ? " hide " : "")} data-testid="EmbeddedVideo">
                <div className = "closeRow">
                    <div><button 
                        className="closeButton"
                        onClick = {e => self.close(e)}
                    >
                        &times;
                    </button></div>
                </div>
                <iframe title = "some-vid" width="300" height="169" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        showEmbeddedVideo : state.showEmbeddedVideo
    }
};
const mapDispatchToProps = {
    HIDE_EMBEDDED_VIDEO
}
export default connect(mapStateToProps, mapDispatchToProps)(EmbeddedVideo);