import React, { Component } from 'react';
import Featured from './featured';
import '../css/homepage.css';

class Homepage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="black-bg">
                    <div className="container">
                        <Featured />
                    </div>
                </div>
                <div className="container">
                    <div className="flex-wrapper">
                        <div className="card-primary"></div>
                        <div className="card-primary"></div>
                        <div className="card-primary"></div>
                        <div className="card-primary"></div>
                        <div className="card-primary"></div>
                        <div className="card-primary"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Homepage;