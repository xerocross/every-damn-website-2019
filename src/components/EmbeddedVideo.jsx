import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./EmbeddedVideo.scss";


class EmbeddedVideo extends BaseComponent {
    render () {
        let src = `https://www.youtube.com/embed/kvzgbOlk3-I?${this.props.autoplay ? "&autoplay=1" : ""}&controls=0`;
        return (
            <div className = "EmbeddedVideo" data-testid="EmbeddedVideo">
                <div className = "closeRow">
                    <div><button className="closeButton">&times;</button></div>
                </div>
                <iframe title = "some-vid" width="300" height="169" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
export default connect(mapStateToProps, mapDispatchToProps)(EmbeddedVideo);