import React, { Component } from 'react';
//import PopupReact from 'react-popup/dist/Popup.react';
import './Person.css';
//import Popup from 'react-popup';
import Popup from 'reactjs-popup';
import './Popup.css';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            phone: '',

            modal: false,
            setModal: false,

            errors: {
                firstName: false,
                lastName: false,
            }
        }
    }
    
    handleOnChange = e => {
        const {target: {value, name}} = e;
        
        const val = value;

        this.setState({
            [name]: val
        })
        console.log(val);
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {name, lastName, email, phone} = this.state;
        
        this.setState({
            errors:{
                firstName: name.trim() === '',
                lastName: lastName.trim() === ''
            }
        })
        

        if (name.trim() && lastName.trim())
        {
           this.setState({
               modal: true
           })
        }
    }

    abrirYCerrar = () =>{
        this.setState({
            modal:false,
        })
    }

    render() {
        return (
            <div className = "Person">
                <form onSubmit={this.handleOnSubmit}>
                Nombre :
                <div className = "nombre">
                <input
                    onChange={this.handleOnChange}
                    name = "name"
                    type = "text"
                    value = {this.state.name}
                    className ={
                        this.state.errors.firstName ? 'error' : ''
                    }
                />
                </div>
                {
                    this.state.errors.firstName 
                    &&
                    <div className = "errorMessage">Required</div> 
                }
                
                Apellido: 
                <div className = "apellido">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "lastName"
                    type = "text"
                    value = {this.state.lastName}
                    className ={
                        this.state.errors.lastName ? 'error' : ''
                    }
                />
                </div>
                {
                    this.state.errors.lastName 
                    &&
                    <div className = "errorMessage">Required</div>
                }
                
                Email:
                <div className = "email">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "email"
                    type = "email"
                    value = {this.state.email}
                />
                </div>
                
                Telefono:
                <div className = "phone">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "phone"
                    type = "tel"
                    value = {this.state.phone}
                />
                </div>
                <button>
                    sublime
                </button> 
                <Popup
                open={this.state.modal}
                onClose={this.abrirYCerrar}>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Personal information </div>
                        <div className="content">
                        <div>
                            <p><strong>Name: </strong>{this.state.name} {this.state.lastName}</p>
                            <p><strong>Email: </strong>{this.state.email}</p>
                            {this.state.phone && <p><strong>Phone:</strong> {this.state.phone}</p>}
                        </div>
                        </div>
                    </div>
                    )}
                </Popup>
                </form>
            </div>
        );
        
    }
}
export default Person;