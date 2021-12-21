import { useMutation } from "@apollo/client"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import gql from "graphql-tag"
import { useState } from "react";
import { useHistory } from "react-router";
import Navbar2 from '../components/Navbar2' 
import Footer from "../components/Footer";



const Login = () => {
    const his = useHistory();
    let user;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
        mutation autenticar($usuario:String,$clave:String){
            autenticar(usuario:$usuario,clave:$clave){
                status
                jwt
            }
        }
    `
    const changeClave = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { autenticar } } = await auth({
            variables: {
                usuario: user.value,
                clave: pass
            }
        })
        if (autenticar.status != 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his.push("/menu")
        }
    }
    const registroUsuarioNuevo = () => {
        his.push("/usuario/registro")
    }
    return <div>
        <Navbar2/>
        <div className='h-screen flex justify-center items-center bg-blue-100'>
           
            <div className='flex flex-col relative w-full m-10'>
                <div className='bg-blue-300 text-white rounded-md p-5  m-7
                shadow-2xl mt-7'>
                    <h2 className='text-2xl'>inicio de sesion Dev Space</h2>
                    <p>inicia sesion para poder </p>
                    <p>manejar todo este poder</p>
                    <p className='text-xs mt-32'>Dev Spaces</p>
                </div>
                <div className="absolute right-12 bg-white rounded-md p-2 w-48
                flex flex-col justify-center items-center shadow-xl py-4">
                    <h2 className='text-red-300 mb-3 text-sm font-bold'>Log In </h2>
                    <div className="bg-red-300 shadow-xl rounded-full w-12 h-12
                    mb-4">
                </div>
                <input type="email" placeholder='ingresa tu correo' className='text-xs w-full p-1 
                focus:outline-none border-b-2 border-gray-600 focus:border-red-500
                bg-transparent mb-2' ref={u => user = u}/>
                <input type="password" placeholder='ingresa tu contraseña' className='text-xs w-full p-1 
                focus:outline-none border-b-2 border-gray-600 focus:border-red-500
                bg-transparent' value={pass}
                onChange={changeClave}/>
                <button className='bg-red-400 hover:bg-red-500
                text-xs text-black w-full mt-4 mb-2 focus:outline-none p-2 rounded' onClick={autenticar}>Login</button>
                <button className=" bg-red-400 hover:bg-red-500
                text-xs text-black w-full  mb-6 focus:outline-none p-2 rounded" onClick={registroUsuarioNuevo}>Registro Usuario Nuevo</button>
                <a href="#" className='text-red-500 mb-5 text-xs'></a>
                
                </div>  
               
            </div>
        </div> 
        <Footer/>
    </div>
}

export default Login