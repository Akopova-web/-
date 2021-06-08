import React from 'react';
import './Table.css';

export const Table = (props) => {
    return <table className="table">
        <thead>
            <tr>
                <th>
                    <button onClick={() => {  }}>
                        id
                    </button>
                </th>
                <th>
                    <button onClick={() => {  }}>
                        firstName
                    </button>
                </th>
                <th>
                    <button onClick={() => {  }}>
                        lastName
                    </button>
                </th>
                <th>
                    <button onClick={() => {  }}>
                        email
                    </button>
                </th>
                <th>
                    <button onClick={() => {  }}>
                        phone
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{props.newPerson.id}</td>
            <td>{props.newPerson.firstName}</td>
            <td>{props.newPerson.lastName}</td>
            <td>{props.newPerson.email}</td>
            <td>{props.newPerson.phone}</td>
            </tr>
            {props.data.map(item => (
                <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)} >
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
}