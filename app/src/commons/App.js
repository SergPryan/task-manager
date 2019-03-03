import React, {Component} from 'react';
import '../static/css/App.css';
import Header from "../routing/Header";
import {Main} from "../routing/Main";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <ToastContainer autoClose={8000}/>
            </div>

        );
    }
}

export default App;
