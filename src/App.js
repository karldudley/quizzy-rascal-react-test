import {  Routes, Route } from 'react-router-dom';

import { Welcome, Create, Lobby } from "./pages"



function App() {


  return (

    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/create" element={<Create />} />
      <Route path="/lobby" element={<Lobby />} />
    </Routes>

    
  );
}

export default App;
