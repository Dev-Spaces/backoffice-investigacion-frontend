import{
  gql,useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
mutation creeProyecyo($objGe:String, $presupuesto:Int, $nombreProyecto: String, $lider:String){
    createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto})
}
`;

const CrearProyecto = () =>{
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombreProyecto: "",
        objetivos: "",
        lider: "",
        presupuesto: 0,
}
return (<div>
  <h1 className='text-center'>Agregar Proyecto</h1>
  <form className='' onSubmit={e =>{
    e.preventDefault();
    creadorDeProyecto({variables:{
      objGe: project.objetivos.value,
      presupuesto: parseInt(project.presupuesto.value),
      nombreProyecto: project.nombreProyecto.value,
      lider: project.lider.value
    }})
  }}>
     <div>
        <label>Nombre Proyecto: </label>
        <input ref={nombre=>project.nombreProyecto = nombre}placeholder="Nombre"></input>
     </div>
     <div>
        <label>Objetivos: </label>
        <input ref={objetivos=>project.objetivos = objetivos}placeholder="Objetivos"></input>
     </div>
     <div>
        <label>Lider: </label>
        <input ref={lider=>project.lider = lider}placeholder="Lider"></input> 
     </div>
     <div>
        <label>Presupuesto: </label>
        <input ref={presupuesto=>project.presupuesto = presupuesto}placeholder="Presupuesto"></input>
     </div>
     <div type="submit"><button>Registrar Proyecto</button></div>     
  </form>  

 
</div>)
}
export default CrearProyecto;