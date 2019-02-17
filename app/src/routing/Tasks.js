import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap";

export default class Tasks extends Component {
    render() {
        return <div>
            Tasks
            <br/>
            <h1> Add task</h1>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows="5"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>

        </div>
    }
}
