import MaterialTable from "material-table";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {
    gql, useQuery
} from "@apollo/client";
import react from "react";

function Proyecto(){
    

   // const columnas =[
        //{
        // title: 'Nombre',
         //field: 'nombre'
        //},
        //{
         //title: 'Objetivo',
         //field: 'objetivo'
        //},
        //{
         //title: 'Lider',
         //field: 'lider'
        //},
        //{
         //title: 'Presupuesto',
         //field: 'presupuesto'
        //}
    //];
    
    const PROYECTOS = gql`
    query {
        proyectos{
            lider
            nombre
            presupuesto
            objetivosGenerales
            identificador
            }
        }
    `; 

    const {loading, error, data} = useQuery(PROYECTOS,{
        context:{
            headers:{
                Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzc5MjQ5NDEsImV4cCI6MTYzNzkzMjE0MX0.A8vvtMPG0SDJKoewopdKQduOcQMhQoOsTxS9C_wWzvw'
            }
        }
    }) 

    if (loading) return "<h1>Cargando<h1>"
    if (error) return "<h1>problemas con el server de graphql<h1>"

    // const dato = data.Proyecto.map(({lider, nombre, presupuesto, objetivosGenerales, identificador})=>(
    //     <tr key = {nombre}>
    //         <td>{nombre}</td>
    //         <td>{lider}</td>
    //         <td>{presupuesto}</td>
    //         <td>{objetivosGenerales}</td>
    //         <td><link to={`/proyecto/${identificador}`}>editar</link></td>
    //     </tr>
    // ));
console.log(data)

    return(
        <div>
            <table>
            
                <thead>
                    <tr>
                        <th>Nombre Proyecto</th>
                        <th>Lider del Proyecto</th>
                        <th>Presupuesto</th>
                        <th>objetivosGenerales</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { data.Proyecto.map(({lider, nombre, presupuesto, objetivosGenerales})=>(
        <tr key = {nombre}>
            <td>{nombre}</td>
            <td>{lider}</td>
            <td>{presupuesto}</td>
            <td>{objetivosGenerales}</td>
            <td><link to={`/proyecto/${identificador}`}>editar</link></td>
        </tr> */}
    ))} 
                </tbody></table>    
            
        </div>
    );
}

export default Proyecto;