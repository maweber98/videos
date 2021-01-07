import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    }

    handleSearchInput = (event) => {
        this.setState({ searchTerm: event.target.value});
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.searchTerm);
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleSubmitForm} className="search-bar ui form">
                    <div className="field">
                    <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchTerm} 
                            onChange={this.handleSearchInput}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;