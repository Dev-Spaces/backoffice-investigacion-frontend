import '../styles/tablas.css'
import { Link } from 'react-router-dom';

function AddUser() {
  return (
    <main class="main">
			<h2 class="main-title">Agregar Usuario</h2>
			<Link to='/editarUsuario'><button>Inicio</button></Link>
			<div class="main-containermain-container">
				<table class="main-container__table">
					<tr>
						<td class="table__top-left top">ID Usuario</td>
						<td class="top">Correo</td>
						<td class="top">Rol</td>
						<td class="table__top-rigth top">Estado</td>
					</tr>
					<tr>
						<td>001001</td>
						<td><input></input></td>
                        <td><select name="Estado">
                                <option value="1">Administrador</option> 
                                <option value="2">Vendedor</option> 
                        </select>
                        </td>
						<td><select name="Estado">
                                <option value="1">Pendiente</option> 
                                <option value="2">Autorizado</option> 
                                <option value="3">No Autorizado</option> 
                            </select>
                        </td>
					</tr>
				</table>
			</div>
            <Link to='./agregarUsuario'><button>Guardar</button></Link>
		</main>
    );
}

export default AddUser