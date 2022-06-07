import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';
class Numbers extends Component {

    constructor() {
        super();
        this.state = {
            numbers: '',
            results: []
        }
    }
    
    handleNumberChange = e => {
        const {target: {value}} = e;

        const numbers = Array.from(value);
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        })
    }

    render() {
        const {results} = this.state;
        return (
            <div className= "Numbers">
                <input
                    type="number"
                    value={this.state.numbers}
                    onChange= {this.handleNumberChange}
                />

                {/* Rendering results */}
                <ul>
                    {
                        results.map((result, i) => (
                            <Result key={i} result={result}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Numbers;