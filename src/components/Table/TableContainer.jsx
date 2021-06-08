import React from 'react';
import { SignupForm } from '../AddData/AddDataFormik';
import Pagination from '../Pagination/Pagination';
import { PersonInformation } from '../PersonInformation/PersonInformation';
import Search from '../Search/Search';
import { Table } from './Table';
import './TableContainer.css'

const TableContainer = (props) => {
    return <>
        <Search data={props.data} searchData={props.searchData} />
        <SignupForm addNewPerson={props.addNewPerson} />
        <Table
            data={props.portionSortData}
            onRowSelect={props.onRowSelect} 
            newPerson={props.newPerson}
            />
        {props.row
            ? <PersonInformation row={props.row} />
            : null}
        {props.data.length >= props.pageSize
            ? <Pagination
                totalItemsCount={props.data.length}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            : null}
    </>
}
export default TableContainer;