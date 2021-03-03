import React from 'react';
import './Search.css';
import { Table } from '../Table/Table';
import { AddData } from '../AddData/AddData';
import { SignupForm } from '../AddData/AddDataFormik';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        allPerson: this.props.table,
        newPerson: {}
    }
    items = Object.values(this.props.table);
    addNewPerson = (value) => {
        this.setState({
            newPerson: value
        })
    }
    filterList = (e) => {
        var filteredList = this.items.filter((element) => {
            return String(element.id).search(e.target.value) !== -1 || element.firstName.toLowerCase().search(e.target.value) !== -1
                || element.lastName.toLowerCase().search(e.target.value) !== -1 || element.email.toLowerCase().search(e.target.value) !== -1
                || String(element.phone).search(e.target.value) !== -1;
        });
        this.setState({
            allPerson: filteredList
        });
    }
    render() {
        return <div className="content">
            <input className="search" placeholder="Поиск" onChange={this.filterList} />
            <SignupForm addNewPerson={this.addNewPerson} />
            <Table table={this.state.allPerson}
                onRowSelect={this.props.onRowSelect}
                newPerson = {this.state.newPerson}
            />
        </div>
    }
}
export default Search;