import React, { Component } from "react";
export default class BaseComponent extends Component {
    log (str) {
        console.log(str);
    }
    bindOwn (keyArr) {
        for (let key of keyArr) {
            if (typeof this[key] === "function") {
                this[key] = this[key].bind(this);
            } else {
                debugger;
            }
        }
    }
    COPY = undefined;
    noop = () => {};
}