import axios from 'axios';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { ModeSelector } from '../ModeSelector/ModeSelector';
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
        currentPage: 0,
        pageCount: 20
    }

    onRowSelect = row => (
        this.setState({ row }),
        window.scrollTo(0, document.documentElement.scrollHeight)
    )

    handlePageClick = ({ selected }) => (
        this.setState({ currentPage: selected })
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
        const currentPage = this.state.currentPage;
        return <>
            { !this.state.isModeSelected
                ? <ModeSelector onSelect={this.modeSelectHandler} />
                : this.state.isFetching
                    ? <Preloader />
                    : <Search table={this.state.data.slice(currentPage * dataSize, dataSize + currentPage * dataSize)}
                            onRowSelect={this.onRowSelect} />
            }

            {this.state.row
                ? <PersonInformation row={this.state.row} />
                : null}
            { this.state.data.length > dataSize
                ? <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={dataSize}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    forcePage={currentPage}
                />
                : null}
        </>
    }
}

export default TableContainer;