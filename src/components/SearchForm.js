import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

class SearchForm extends React.Component {
    render() {
        return (
            <Form inline>
                <FormGroup controlId="formInlineEmail">
                    <FormControl type="search" placeholder="Finance..." />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
            </Form>
        );
    }
}

export default SearchForm;