import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'styles/styles.css';
import Inicio from 'pages/inicio';
import Usuarios from 'pages/usuarios';
import Login from 'pages/login'
import PublicLayout from 'layout/publicLayout';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route element ={<PublicLayout/>}/> */}
            <Route exact path= {"/"} element={<Inicio/>}/>
            <Route path= {"/login"} element={<Login/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/editarUsuarios" element={<EditarUsuarios/>}/>
            <Route path="/RegistrarUsuarios" element={<RegistrarUsuarios/>}/>
          {/* <Route element ={<PublicLayout/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;