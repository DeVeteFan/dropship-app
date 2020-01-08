import React, { Component } from 'react';
import Featured from './featured';

class Homepage extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <Featured />
            </div>
        );
    }
}

export default Homepage;