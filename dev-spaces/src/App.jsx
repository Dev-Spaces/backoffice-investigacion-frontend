import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from 'pages/login';
import Usuarios from 'pages/usuarios';
import RegistroUsuarios from "pages/registroUsuarios";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path= {"/"} element={Login}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
          <Route path="/registroUsuarios" element={<RegistroUsuarios/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
