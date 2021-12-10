import { Link } from 'react-router-dom';
import MaterialTable from "material-table";

function Usuarios(){
    
    const columnas =[
        {
         title: 'Nombre',
         field: 'nombre'
        },
        {
         title: 'Identificación',
         field: 'identificacion'
        },
        {
         title: 'Rol',
         field: 'rol'
        },
        {
         title: 'Estado',
         field: 'estado'
        },
        {
         title: 'Correo',
         field: 'correo'
        }
    ];
    
    const data = [
        {nombre: 'Alfredo', identificacion: 4500, rol: 'adminstrador', estado: 'activo', correo: 'alfredo@prueba.com'},
        {nombre: 'Alfredo', identificacion: 4500, rol: 'adminstrador', estado: 'activo', correo: 'alfredo@prueba.com'},
        {nombre: 'Alfredo', identificacion: 4500, rol: 'adminstrador', estado: 'activo', correo: 'alfredo@prueba.com'},
        {nombre: 'Alfredo', identificacion: 4500, rol: 'adminstrador', estado: 'activo', correo: 'alfredo@prueba.com'},
        {nombre: 'Alfredo', identificacion: 4500, rol: 'adminstrador', estado: 'activo', correo: 'alfredo@prueba.com'}
    ];



    return(
        <div>
            <MaterialTable columns={columnas}
            data = {data}
            />
        </div>
    );
}

export default Usuarios;