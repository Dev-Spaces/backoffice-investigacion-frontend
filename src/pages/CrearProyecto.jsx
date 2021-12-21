import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";

const MUTATION_PROYECTO = gql`
    mutation creeProyecto($objGe:String,$presupuesto:Int, $nombreProyecto: String, $lider:String){
        createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto})
    }
`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombreProyecto: "",
        objetivos: "",
        lider: "",
        presupuesto: 0,
    }

    return (<div><h1>Crear Proyecto</h1>
        <form onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                objGe: project.objetivos.value,
                presupuesto: parseInt(project.presupuesto.value),
                nombreProyecto: project.nombreProyecto.value,
                lider: project.lider.value
            }})
        }} ><Navbar3/>
            <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 justify-center">
		            <div class="menus flex flex-col w-full lg:w-1/2 justify-center m-8 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl ">
                        <h1 className="text-6xl m-6">Crear proyecto</h1>
            <div className="form-group">
                <label>Nombre Proyecto</label>
                <input className="form-control" ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </div>
            <div className="form-group">
                <label>Objetivos</label>
                <input className="form-control" ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
            </div>
            <div className="form-group">
                <label>Lider</label>
                <input  className="form-control"ref={lider => project.lider = lider} placeholder="Lider" />
            </div>
            <div className="form-group">
                <label>Presupuesto</label>
                <input className="form-control" ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </div>
            <div><button className="btn btn-primary" type="submit">Registrar Proyecto</button></div>
            </div>
            </div>
        </form>
        <Footer/>
    </div>)
}

export default CrearProyecto