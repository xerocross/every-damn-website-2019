import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./SubscribeModal.scss";

class SubscribeModal extends BaseComponent {
    constructor () {
        super();
        this.state = {
            show : false
        }
        this.hide = this.hide.bind(this);
    }
    componentDidMount () {
        let self = this;
        if (this.props.askToSubscribe) {
            setTimeout(() => {
                self.setState({
                    show: true
                });
            }, 2000);
        }
    }
    hide (e) {
        e.preventDefault();
        this.setState({
            show: false
        });
    }
    render () {
        let self = this;
        return (
            <div className = "SubscribeModal" data-testid="SubscribeModal">
                <div className = {"overlay " + (self.state.show ? "" : " hide ")} >
                    <div className = "inner-message">
                        Subscribe to my groovy newsletter!
                        <form>
                            <input className = "form-control" type ="text" name="email" placeholder="yo@email.com"/>
                            <div className = "btns">
                                <button className = "btn btn-danger" onClick = {(e) => self.hide(e)}>No Thanks</button>
                                <button className = "btn btn-success" onClick = {(e) => self.hide(e)}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        askToSubscribe : state.askToSubscribe
    }
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(SubscribeModal);