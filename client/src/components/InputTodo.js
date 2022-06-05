import React from 'react'
import { Fragment } from 'react'
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const InputTodo = () => {
    return (
        <Box>
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
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Todo" variant="outlined" />
            </Box>

        </Box>
    )
}

export default InputTodo
