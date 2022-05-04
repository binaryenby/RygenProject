import React from 'react';
import { Form } from 'react-bootstrap'


export default function SearchBar(props) {
    let{handleChange, searchString} = props;

    return(
        <Form onSubmit={handleChange}>
            <Form.Group>
               <Form.Control type="text" placeholder="Search for a film" name="search"
                value={searchString} onChange={handleChange}/>
            </Form.Group>
       </Form>
    )
}