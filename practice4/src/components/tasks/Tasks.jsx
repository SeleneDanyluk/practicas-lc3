import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import './Tasks.css'


const Tasks = ({ tareas }) => {

    return (
        <div>
            <ListGroup as="ol" numbered>
                {tareas.map((task, index) => (
                    <ListGroup.Item className='tasks-item' key={index} as="li">{task.task}
                        <div className='container'>
                            {!task.isComplete ? <Button variant="success" id="button-addon2" >
                                Completa
                            </Button> : <p>Realizada</p>}
                            <Button variant="outline-dark" id="button-addon2">
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
    tareas: PropTypes.array
};

export default Tasks