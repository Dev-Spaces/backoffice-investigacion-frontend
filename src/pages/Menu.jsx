import { Link } from "react-router-dom"
import { useHistory } from "react-router";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList,faTasks,faUsers} from '@fortawesome/free-solid-svg-icons'





const MenuPrincipal = () => {
  const his = useHistory();
  let token = localStorage.getItem('auth_token')

  
  if (token) {
    return <div>
            <Navbar3/>
            <div class="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-24 justify-center">
		            <div class="menus flex flex-row w-full lg:w-1/2 justify-between m-6 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl hover:bg-gray-300">
                      <a className="nav-link"><Link to="/proyecto">Crear Proyecto</Link></a>
                      <FontAwesomeIcon icon={faClipboardList}/>
                </div>
            </div>
            <div class="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-24 justify-center">
		            <div class="menus flex flex-row w-full lg:w-1/2 justify-between m-6 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl hover:bg-gray-300">
                      <a className="nav-link"><Link to="/proyecto/listar">Ver Proyectos</Link></a>
                      <FontAwesomeIcon icon={faTasks}/>
                </div>
            </div>
            <div class="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-24 justify-center">
		            <div class="menus flex flex-row w-full lg:w-1/2 justify-between m-6 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl hover:bg-gray-300">
                      <a className="nav-link"><Link to="usuario">Usuarios</Link></a>
                      <div >
                      <FontAwesomeIcon className='w-12' icon={faUsers}/>
                      </div>
                </div>
            </div>
            <Footer/>
          </div>
  } else {

    his.push("/")
    return <div></div>
  }

}

export default MenuPrincipal