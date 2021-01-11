//Добавление строки без валидации
import React from 'react';
import './AddData.css';
export class AddData extends React.Component {
    toggleDisplay = () => {
        let addingForm = document.querySelector('.form_block');
        addingForm.classList.toggle('open');
    }
    state = {
        newPerson: {}
    }
    Add = () => {
            this.setState({
                newPerson: {
                    id: document.form.id.value,
                    firstName: document.form.firstName.value,
                    lastName: document.form.lastName.value,
                    email: document.form.email.value,
                    phone: document.form.phone.value
                }
            })
    }
    //let propertiesOfNewPerson = Object.values(newPerson);
    render () {
        return <div className="form_block">
        <button className="addButton" onClick={this.toggleDisplay}>Add person</button>
        <form name="form" className="form">
            <span>
                <input id="input_id" onChange={this.Add} name="id" placeholder={"Id"} required></input>
            </span>
            <span>
                <input id="input_firstName" onChange={this.Add} name="firstName" placeholder={"FirstName"}></input>
            </span>
            <span>
                <input id="input_lastName" onChange={this.Add} name="lastName" placeholder={"LastName"} type="email"></input>
            </span>
            <span>
                <input id="input_email" onChange={this.Add} name="email" placeholder={"Email"}></input>
            </span>
            <span>
                <input id="input_phone" onChange={this.Add} name="phone" placeholder={"Phone"} ></input>
            </span>
            <span>
                <button type="button" 
                onClick={() => {this.props.addNewPerson(this.state.newPerson)}}>
                        Add</button>
            </span>
        </form>
    </div>
    }
}
