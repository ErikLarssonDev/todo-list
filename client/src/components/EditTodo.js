import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';



const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setDescription(todo.description)
        setOpen(false);
    }

    const updateDescription = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:8000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
            setOpen(false)
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }
   

    return (
        <div>
            <Button variant="outlined" marginLeft={5} onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'

                        }}
                    >

                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom: 1}}>
                            Edit todo
                        </Typography>
                        <TextField id="outlined-basic" label="Todo" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
                        <Box 
                        
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                marginTop: 1
                            }}

                        >
                            <Button variant="outlined" sx={{marginRight: 1}} onClick={e => updateDescription(e)}>Save</Button>
                            <Button variant="outlined" color="error" onClick={handleClose}>Close</Button>
                        </Box>

                    </Box>


                </Box>
            </Modal>
        </div>
    )
}

export default EditTodo
