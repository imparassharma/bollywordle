import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom'; // Import HashRouter from react-router-dom
import Main from '../src/components/main';
import Homepage from './components/Homepage';

// Root component
function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/main" element={<Main/>} />
    </Routes>
);
}

export default App;