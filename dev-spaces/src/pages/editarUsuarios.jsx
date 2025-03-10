import MaterialTable from "material-table";

function EditarUsuarios(){
    
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
            title="Editar usuarios"
            actions={[
             {
              icon: 'edit',
              tooltip: 'Editar usuario',
              onclick: (event, rowData)=>alert('Has presionado editar al usuario: '+rowData.nombre)
             },
             {
              icon: 'delete',
              tooltip: 'Eliminar registo de usuario',
              onclick: (event, rowData)=>window.confirm('Estas seguro de que deseas eliminar al usuario: '+rowData.nombre+'?')
             }
            ]}
            options={{
                actionsColumnIndex: -1
            }}
            localization={{
                header:{
                    actions: 'Acciones'
                }
            }}
            />
        </div>
    );
}

export default EditarUsuarios;