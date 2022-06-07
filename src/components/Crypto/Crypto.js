import React, { Component } from 'react';
import './Crypto.css';

class Crypto extends Component {
    constructor() {
        super();
        this.state = {
            dollars: 0
        };
    }

    handleOnChange = e => {
        this.setState({
            dollars:Number(e.target.value)
        });
    }
    
    shouldComponentUpdate(props, state) {

        if(state.dollars % 10 === 0){
            return true
        }
        
        return false
    
        //return !(state.dollars % 10);
        //return state.dollars % 10 === 0
    }

    render() {
        return (
            <div className="Coins">
                <h1>Compra Cryptocoins</h1>
                <div className="question">
                    <p>¿Cuántos dólares tienes</p>
                    <p>
                        <input
                            placeholder='0'
                            onChange={this.handleOnChange}
                            type='number'
                        />
                    </p>
                </div>

                <div className="answer">
                    <p>Precio de Cryptocoin: $10</p>
                    <p>
                        Puedes comprar <strong>{this.state.dollars/10}</strong> coins.
                    </p>
                </div>
            </div>
        );
    }
}

export default Crypto;