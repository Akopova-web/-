import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {

    let [filter, setFilteredList] = useState(props.data);
    let items = Object.values(props.data);

    let filterList = (e) => {
        var filteredList = items.filter((element) => {
            return String(element.id).search(e.target.value) !== -1 || element.firstName.toLowerCase().search(e.target.value) !== -1
                || element.lastName.toLowerCase().search(e.target.value) !== -1 || element.email.toLowerCase().search(e.target.value) !== -1
                || String(element.phone).search(e.target.value) !== -1;
        });
        setFilteredList(filteredList);
        props.searchData(filteredList)
    }
    return <div className="content">
        <input className="search" placeholder="Поиск" onChange={filterList} />
    </div>
}
export default Search;