import './App.css';
import { Fragment } from 'react'

// MUI imports
import Container from '@mui/material/Container';


// Components
import InputTodo from './components/InputTodo';

function App() {
  return (
    <Fragment>
      <Container sx={{ marginY: 5 }}>
        <InputTodo />
      </Container>
    </Fragment>
  );
}

export default App;
