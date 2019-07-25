import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./CookiePermission.scss";
import { HIDE_COOKIE_POPOVER } from "../actions.js";

class CookiePermission extends BaseComponent {
    constructor () {
        super();
        this.hideThis = this.hideThis.bind(this);
    }
    hideThis (e) {
        e.preventDefault();
        this.props.HIDE_COOKIE_POPOVER();
    }
    render () {
        let self = this;
        let classVal = "CookiePermission" + (this.props.showCookiePermission ? "" : " hide ");


        return (
            <div className = {classVal} data-testid="CookiePermission">
                <div className = "container">
                    <p>
                        Europe wants us to remind you that this website&mdash;like every other website that exists&mdash;uses <strong>cookies</strong>.  Do we have your permission to use cookies?
                    </p>
                    <div className = "buttons-bar">
                        <button 
                            className = "btn btn-danger" 
                            onClick = {(e) => (void self.hideThis(e))}
                        >
                                no, cookies frighten me
                        </button>
                        <button 
                            className = "btn btn-success"
                            onClick = {(e) => (void self.hideThis(e))}
                        >
                                yes, cookies are ok
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        showCookiePermission : state.showCookiePermission
    }
};
const mapDispatchToProps = {
    HIDE_COOKIE_POPOVER
}
export default connect(mapStateToProps, mapDispatchToProps)(CookiePermission);