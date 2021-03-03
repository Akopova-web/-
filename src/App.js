import React from "react";
import axios from "axios";
import "./App.css";
import { ModeSelector } from "./components/ModeSelector/ModeSelector";
import TableContainer from "./components/Table/TableContainer.Right";
import Preloader from "./components/utility/Preloader";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: {},
    portionSortData: {},
    newPerson: {},
    isFetching: false,
    isModeSelected: false,
    row: null,
    currentPage: 1,
    pageSize: 50,
  };

  handlePageClick = (page) =>
    this.setState({
      currentPage: page,
      portionSortData: this.state.data.slice(
        this.state.pageSize * (page - 1) + 1,
        page * this.state.pageSize
      ),
    });
  onRowSelect = (row) => this.setState({ row });
  searchData = (data) => this.setState({ portionSortData: data });
  addNewPerson = (newPersonObject) => this.setState({newPerson: newPersonObject});

  componentDidMount(url) {
    let data;
    axios
      .get(url)
      .then((response) => {
        return (data = response.data);
      })
      .then(() => {
        return this.setState({
          portionSortData: data.slice(0, 50),
          data,
          isFetching: false,
        });
      });
  }

  modeSelectHandler = (url) => {
    this.componentDidMount(url);
    this.setState({
      isFetching: true,
      isModeSelected: true,
    });
  };

  render() {
    return (
      <>
        {!this.state.isModeSelected ? (
          <ModeSelector onSelect={this.modeSelectHandler} />
        ) : this.state.isFetching ? (
          <Preloader />
        ) : (
          <TableContainer
            data={this.state.data}
            portionSortData={this.state.portionSortData}
            row={this.state.row}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            newPerson={this.state.newPerson}
            addNewPerson={this.addNewPerson}
            onPageChanged={this.handlePageClick}
            searchData={this.searchData}
            onRowSelect={this.onRowSelect}
          />
        )}
      </>
    );
  }
}

export default App;