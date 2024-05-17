import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

const NewTask = ({ onHandleAddNewTask }) => {

    const [enteredTask, setEnteredTask] = useState("");

    const handleNewTask = (e) => {
        setEnteredTask(e.target.value);
    };

    const handleAddNewTaskSubmit = (e) => {
        e.preventDefault();
        onHandleAddNewTask(enteredTask);
        setEnteredTask("");
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Ingresar tarea"
                    aria-label="Ingresar tarea"
                    aria-describedby="basic-addon2"
                    onChange={handleNewTask}
                    value={enteredTask}
                />
                <Button variant="dark" id="button-addon2" onClick={handleAddNewTaskSubmit}>
                    Agregar
                </Button>
            </InputGroup>
        </div>
    );
};

NewTask.PropTypes = {
    onHandleAddNewTask: PropTypes.func
};

export default NewTask