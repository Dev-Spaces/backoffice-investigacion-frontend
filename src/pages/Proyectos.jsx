import {
  useQuery,
  gql
} from "@apollo/client";
import { Link } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

const Proyectos = () => {
  const PROYECTOS = gql`
  query  {
    proyectos {
      lider
      nombre
      presupuesto
      _id
    }
  }
`;

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzc5MjQ5NDEsImV4cCI6MTYzNzkzMjE0MX0.A8vvtMPG0SDJKoewopdKQduOcQMhQoOsTxS9C_wWzvw'
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, _id }) => (
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row" key={nombre}>
      <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{nombre}</td>
      <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{lider}</td>
      <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{presupuesto}</td>
      <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300"><Link to={`/proyecto/${_id}`}><FontAwesomeIcon icon={faEdit}/></Link></td>
    </tr>
  ));

  return (<div>
    <Navbar3/>
    <div class="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-24 justify-center">
		            <div class="menus flex flex-col w-full lg:w-1/2 justify-between m-6 pt-12 pb-11 px-6 bg-gray-200
                    rounded-xl ">
    <h1 className="text-6xl m-6">PROYECTOS</h1>
    <table className="min-w-full border-collapse block md:table m-8 mx-1">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell ">Nombre Proyecto</th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Lider del Proyecto</th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Presupuesto</th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {datosTabla}
      </tbody></table>
      </div>
      </div>
    <Footer/>
  </div>)
}

export default Proyectos