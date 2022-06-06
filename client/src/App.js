import './App.css';
import { Fragment } from 'react'

// MUI imports
import Container from '@mui/material/Container'


// Components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <Fragment>
      <Container sx={{ marginY: 5 }}>
        <InputTodo />
        <ListTodos />
      </Container>
    </Fragment>
  );
}

export default App;
