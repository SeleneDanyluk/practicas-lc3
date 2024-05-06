import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (e) => {
        const name = e.target.value;
        setUsername(name);
        if (name.includes('o') || name.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username === '' || username.toLowerCase().includes('o')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
        setUsername('');
    };

    return (
        <div className='form-container'>
            <h4>Ingrese su nombre de usuario</h4>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleUsernameChange}
                    value={username}
                />
            </InputGroup>
            <Button
                variant="dark"
                type="submit"
                onClick={handleRegister}>
                Registrarse
            </Button>
            <p>Nombre de usuario ingresado: {username}</p>
        </div>
    )
}

export default Login