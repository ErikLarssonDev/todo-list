import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const ListTodos = () => {

    const [todos, setTodos] = useState([])


    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:8000/todos/${id}`, {
                method: 'DELETE'
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message)
        }  
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)
        }

    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow key="rows">
                        <TableCell>Todos</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((row) => (
                        <TableRow
                            key={row.todo_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right"><Button variant="outlined" color="error" onClick={() => deleteTodo(row.todo_id)}>Delete</Button></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListTodos
