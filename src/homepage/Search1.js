import React, { Component } from 'react';

export class Search1 extends Component {
  state = {
    ggg: '',
  };
  handleForm = (e) => {
    this.setState({
      ggg: e.target.value,
    });
  };
  searsh = (event) => {
    event.preventDefault();
    this.props.getSearsh(this.state.ggg);
  };
  render() {
    return (
      <div>
        <div class="container h-100">
          <div class="d-flex  justify-content-center h-100">
            <form class="searchbar" onSubmit={this.searsh}>
              <input
                value={this.state.ggg}
                onChange={this.handleForm}
                class="search_input"
                type="text"
                name=""
                placeholder="Search... "
              />
              <button class="search_icon" >
              buuuu
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search1;