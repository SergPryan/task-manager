import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap";
// import connect from 'redux-saga'

// @connect
class Tasks extends Component {

    createTask = () =>{
        console.log("create task")
        this.props.dispatch("CREATE_TASK")
    }

    render() {
        return <div>
            Tasks
            <br/>
            <h1>Add task</h1>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows="5"/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.createTask}>
                    Submit
                </Button>


            </Form>

        </div>
    }
}

export {Tasks}