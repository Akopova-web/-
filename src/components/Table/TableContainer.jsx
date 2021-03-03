import axios from 'axios';
import React from 'react';
import { ModeSelector } from '../ModeSelector/ModeSelector';
import Pagination from '../Pagination/Pagination';
import { PersonInformation } from '../PersonInformation/PersonInformation';
import Search from '../Search/Search';
import Preloader from '../utility/Preloader';
import './TableContainer.css'

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: {},
        isFetching: false,
        isModeSelected: false,
        row: null,
        currentPage: 1,
        pageCount: 20
    }

    handlePageClick = (page) => (
        this.setState({ currentPage: page })
    )
    onRowSelect = row => (
        this.setState({ row })
    )
    componentDidMount(url) {
        let data;
        axios.get(url)
            .then(response => {
                return (
                    data = response.data
                )
            })
            .then(
                () => {
                    return (
                        this.setState({
                            data,
                            isFetching: false
                        })
                    )
                }
            )
    }

    modeSelectHandler = url => {
        this.componentDidMount(url)
        this.setState({
            isFetching: true,
            isModeSelected: true
        })
    }

    render() {
        let dataSize = 50;
        return <>
            { !this.state.isModeSelected
                ? <ModeSelector onSelect={this.modeSelectHandler} />
                : this.state.isFetching
                    ? <Preloader />
                    : <Search data={this.state.data}
                        onRowSelect={this.onRowSelect} />
            }

            {this.state.row
                ? <PersonInformation row={this.state.row} />
                : null}
            { this.state.data.length > dataSize
                ? <Pagination totalItemsCount={this.state.data.length}
                    pageSize={dataSize}
                    currentPage={this.state.currentPage}
                    onPageChanged={this.handlePageClick}
                />
                : null}
        </>
    }
}

export default TableContainer;