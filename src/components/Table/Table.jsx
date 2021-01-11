import React, { useMemo, useState } from 'react';
import './Table.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = items;
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    return { items: sortedItems, requestSort };
}
export const Table = (props) => {
    const { items, requestSort } = useSortableData(props.table);
    return <table className="table">
        <thead>
            <tr>
                <th>
                    <button onClick={() => { requestSort('id') }}>
                        id
                    </button>
                </th>
                <th>
                    <button onClick={() => { requestSort('firstName') }}>
                        firstName
                    </button>
                </th>
                <th>
                    <button onClick={() => { requestSort('lastName') }}>
                        lastName
                    </button>
                </th>
                <th>
                    <button onClick={() => { requestSort('email') }}>
                        email
                    </button>
                </th>
                <th>
                    <button onClick={() => { requestSort('phone') }}>
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
            {props.table.map(item => (
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