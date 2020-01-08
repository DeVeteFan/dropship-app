import React, { Component } from 'react';
import Featured from './featured';
import '../css/homepage.css';

class Homepage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="black-bg">
                    <div className="container">
                        <Featured />
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="flex-wrapper">
                            <div className="card-primary"></div>
                            <div className="card-primary"></div>
                            <div className="card-primary"></div>
                            <div className="card-primary"></div>
                        </div>
                    </div>
                    <div className="rotated"></div>
                </section>

                <section className="black-bg">
                    <div className="container">
                        <div className="showcase">
                            <h1 className="center">showcase area</h1>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default Homepage;