import React, {Component} from 'react'
import {toast} from "react-toastify";

export default class Home extends Component{

    // notify = () => this.toastId = toast("Hello", { autoClose: false });

    notify = () => {
        toast("Default Notification !");

        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });

        toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
        });

        toast.warn("Warning Notification !", {
            position: toast.POSITION.BOTTOM_LEFT
        });

        toast.info("Info Notification !", {
            position: toast.POSITION.BOTTOM_CENTER
        });

        toast("Custom Style Notification with css class!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    };

    render() {
        return (<div>
            <button onClick={this.notify}>Update</button>
        </div>);
    }
}
