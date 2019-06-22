import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

class SearchForm extends React.Component {
    render() {
        return (
            <Form inline>
                <FormGroup controlId="formInlineEmail">
                    <FormControl type="search" placeholder="enter something..." />
                </FormGroup>
                {' '}
                <Button type="submit">search</Button>
            </Form>
        );
    }
}

export default SearchForm;