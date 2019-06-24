import React from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

class SearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event){
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit(event){
       
        console.log(this.state.searchValue);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <InputGroup>
                    <FormControl
                        placeholder="Search the blockchain"
                        aria-label="Search the blockchain"
                        aria-describedby="search"
                        size="lg"
                        onChange={this.handleTextChange}
                    />
                    <InputGroup.Append>
                        <Button variant="dark" type="submit" onClick={this.handleSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <p>{this.state.searchValue}</p>
            </div>
        );
    }
}

export default SearchForm;