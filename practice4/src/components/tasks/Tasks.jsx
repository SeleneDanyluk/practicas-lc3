import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import './Tasks.css'


const Tasks = ({ tareas, completeTask, deleteTask }) => {

    return (
        <div>
            <ListGroup as="ol" numbered>
                {tareas.map((task, index) => (
                    <ListGroup.Item className='tasks-item' key={index} as="li">
                        <div style={{ textDecoration: task.isComplete ? 'line-through' : 'none', color: task.isComplete ? 'grey' : 'inherit' }}>
                            {task.task}
                        </div>
                        <div className='container'>
                            {!task.isComplete ? <Button variant="success" id="button-addon2" onClick={() => completeTask(task.id)} >
                                Completa
                            </Button> : ""}
                            <Button variant="outline-dark" id="button-addon2" onClick={() => deleteTask(task.id)}>
                                Borrar
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

Tasks.PropTypes = {
    tareas: PropTypes.array,
    completeTas: PropTypes.func,
    deleteTask: PropTypes.func
};

export default Tasks