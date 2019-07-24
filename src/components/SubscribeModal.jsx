import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./SubscribeModal.scss";

class SubscribeModal extends BaseComponent {
    render () {
        return (
            <div className = "SubscribeModal" data-testid="SubscribeModal">

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
export default connect(mapStateToProps, mapDispatchToProps)(SubscribeModal);