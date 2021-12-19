
// nombre: String
// identificacion:Int
// clave: String

import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { useHistory } from "react-router";
import Navbar2 from '../components/Navbar2' 
import Footer from "../components/Footer";

// perfil: String
const CrearUsuario = () => {
    const his = useHistory();

    let nombre, identificacion, clave, perfil, email

    const registrarUsuarioNuevo = async (e) => {
        e.preventDefault()
        let nuevoUsuario = {
            "nombre": nombre.value,
            "identificacion": parseInt(identificacion.value),
            "perfil": perfil.value,
            "clave": clave.value,
            "email": email.value
        }
        const response = await crearUser({ variables: { user: nuevoUsuario } })
        if (response?.data?.createUser) {
            alert("Usuario Creado")
            his.push("/")
        } else {
            alert("Se presento un error")
        }
    }

    const CREAR_USUARIO = gql`
        mutation CreateUser($user: UserInput) {
            createUser(user: $user)
        }
    `
    const [crearUser] = useMutation(CREAR_USUARIO)



    return <div>
        <Navbar2/>
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 justify-center">
		            <div class="menus flex flex-col w-full lg:w-1/2 justify-center m-8 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl">
                        <h1 className="text-6xl m-6">Crear proyecto</h1>
                <div>      
                    <label>Nombre</label>
                    <input className="form-control" ref={val => nombre = val}></input>
                </div> 
                <div className="form-group">
                    <label>Identificacion</label>
                    <input type="number" className="form-control" ref={val => identificacion = val}></input>
                </div>
                <div className="form-group">
                    <label>Clave</label>
                    <input type="password" className="form-control" ref={val => clave = val}></input>
                </div>
                <div className="form-group">
                    <label>Perfil</label>
                    <select className="form-control" ref={val => perfil = val}>
                        <option></option>
                        <option value="Lider">Lider</option>
                        <option value="Admin">Admin</option>
                        <option value="Estudiante">Estudiante</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" className="form-control" ref={val => email = val}></input>
                </div>
                <button className="btn btn-primary" onClick={registrarUsuarioNuevo}>Registrarse</button>
            </div>
        </div>
                    
        <Footer/>
    </div>
    
}

export default CrearUsuario;