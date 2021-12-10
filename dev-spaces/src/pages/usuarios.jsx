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
        {nombre: 'Santiago', identificacion: 4600, rol: 'adminstrador', estado: 'activo', correo: 'santiago@prueba.com'},
        {nombre: 'Michael', identificacion: 8400, rol: 'adminstrador', estado: 'activo', correo: 'michael@prueba.com'},
        {nombre: 'Juan pablo', identificacion: 6200, rol: 'adminstrador', estado: 'activo', correo: 'JuanP@prueba.com'},
        {nombre: 'Donovan', identificacion: 3459, rol: 'adminstrador', estado: 'activo', correo: 'donovan@prueba.com'}
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