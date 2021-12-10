import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from 'pages/login';
import Usuarios from 'pages/usuarios';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path= {"/"} element={Login}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
