import '../styles/tablas.css'
import searchIcon from '../media/assets/search-icon.png'
import editIcon from '../media/assets/edit.png'
import { Link } from 'react-router-dom';

const UsersTable = () => {
    return (
        <main class="main">
			<h2 class="main-title">Usuarios</h2>
			
			<Link to='/agregarUsuario'><button>Agregar nuevo usuario</button></Link>
			
			<section class="search-section">
				<div class="search-container">
					<img src={searchIcon} alt="Search icon" />
					<form class="search-container__form" action="">
						<input type="text" />
					</form>
				</div>
			</section>
			<div class="main-containermain-container">
				<table class="main-container__table">
					<tr>
						<td class="table__top-left top">ID Usuario</td>
						<td class="top">Correo</td>
						<td class="top">Rol</td>
						<td class="top">Estado</td>
						<td class="table__top-rigth top">Opciones</td>
					</tr>

					<tr>
						<td>001001</td>
						<td>carlosmorales202@gmail.com</td>
						<td>vendedor</td>
						<td>Autorizado</td>
						<td><img class="button-edit" src={editIcon} alt="Edit icon" /></td>
					</tr>

					<tr>
						<td>001002</td>
						<td>martinGonzalez@gmail.com</td>
						<td>Vendedor</td>
						<td>Autorizado</td>
						<td><img class="button-edit" src={editIcon} alt="Edit icon"/></td>
					</tr>

					<tr>
						<td>001003</td>
						<td>simonartega1979@gmail.com</td>
						<td>Vendedor</td>
						<td>No Autorizado</td>
						<td><img class="button-edit" src={editIcon} alt="Edit icon"/></td>
					</tr>

					<tr>
						<td >001004</td>
						<td>santiagoAcuña0@gmail.com</td>
						<td>vendedor</td>
						<td>Pendiente</td>
						<td class="table__bottom-left">
							<img class="button-edit" src={editIcon} alt="Edit icon"/>
						</td>
					</tr>
				</table>
			</div>
		</main>
    )
}

export default UsersTable;