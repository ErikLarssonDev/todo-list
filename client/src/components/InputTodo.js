import React from 'react'
import { Fragment, useState } from 'react'
import { Box, Button, InputAdornment, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                variant='h4'
                component='h1'
                marginTop={5}
                marginBottom={0}
            >
                Todo list
            </Typography>
            <Box
                component="form"
                onSubmit={onSubmitForm}
                sx={{
                    '& > :not(style)': {
                        m: 1,
                        width: '50ch',
                    }
                }}


                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Todo" variant="outlined" value={description} onChange={e => setDescription(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    edge='end'
                                >
                                    Add
                                </Button>
                            </InputAdornment>
                        )
                    }}
                />

            </Box>

        </Box>
    )
}

export default InputTodo
