import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'styles/styles.css';
import Inicio from 'pages/inicio';
import Usuarios from 'pages/usuarios';
import EditarUsuarios from "pages/editarUsuarios";
import RegistroUsuarios from "pages/registroUsuarios";
import Login from 'pages/login'
import PublicLayout from 'layout/publicLayout';
import AddUser from "pages/agregarUsuario";
import UsersMaster from "pages/usersMasters";



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
            <Route path="/registroUsuarios" element={<RegistroUsuarios/>}/>
            <Route path="/agregarUsuario" element={<AddUser/>}/>
            <Route path="/usersMasters" element={<UsersMaster/>}/>
            
          {/* <Route element ={<PublicLayout/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;